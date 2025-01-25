import { schedules, wait } from "@trigger.dev/sdk/v3";

export const warmup = schedules.task({
  id: "warmup",
  cron: "*/30 * * * *",
  run: async (payload) => {
    const now = new Date(payload.timestamp);
    console.log(`[Server] Starting refresh at ${now}`);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
      console.log(`[Server] Fetching ${baseUrl}`);

      const response = await fetch(baseUrl, {
        headers: {
          'User-Agent': 'Trigger.dev Warmup Task'
        },
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch with status: ${response.status}`);
      }

      await wait.for({ seconds: 10 });

      const html = await response.text();
      const pageLoaded = html.includes('data-testid="projects-grid"') || 
                        html.includes('id="project-gallery"');
      
      if (!pageLoaded) {
        throw new Error('Projects grid not found in response');
      } else if (pageLoaded) {
        console.log(`[Server] Warmup successful - page fully rendered`);
      }

      console.log(`[Server] Warmup complete`);
    } catch (error) {
      console.error(`[Server] Error during warmup: ${error}`);
      throw error;
    }
  }
})