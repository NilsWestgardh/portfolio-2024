import { schedules } from "@trigger.dev/sdk/v3";

// Warmup runs every hour
export const warmup = schedules.task({
  id: "warmup",
  cron: "0 * * * *",
  run: async (payload) => {
    const now = new Date(payload.timestamp);
    console.log(`[Server] Starting refresh at ${now}`);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/warmup`);
      console.log(`[Server] Warmup response: ${await response.json()}`);
    } catch (error) {
      console.error(`[Server] Error during warmup: ${error}`);
    }
  }
})