import { schedules } from "@trigger.dev/sdk/v3";

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

      const html = await response.text();
      
      if (!html.includes('data-testid="projects-grid"')) {
        throw new Error('Projects grid not found in response');
      }

      console.log(`[Server] Warmup successful - page fully rendered`);
    } catch (error) {
      console.error(`[Server] Error during warmup: ${error}`);
      throw error;
    }
  }
})