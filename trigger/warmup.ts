import { schedules } from "@trigger.dev/sdk/v3";
import puppeteer from "puppeteer";

// Warmup runs every 30 minutes
export const warmup = schedules.task({
  id: "warmup",
  cron: "*/30 * * * *",
  run: async (payload) => {
    const now = new Date(payload.timestamp);
    console.log(`[Server] Starting refresh at ${now}`);

    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = process.env.NEXT_PUBLIC_SITE_URL!;

      console.log(`[Server] Navigating to ${url}`);

      await page.goto(url, {
        waitUntil: "networkidle0"
      });

      // Wait for content to load
      const projects = await page.waitForSelector('[data-testid="projects-grid"]', {
        timeout: 10000
      });

      if (!projects) {
        throw new Error("Failed to load projects");
      }

      console.log(`[Server] Warmup successful - page loaded with content`);

      await browser.close();
    } catch (error) {
      console.error(`[Server] Error during warmup: ${error}`);
      throw error;
    }
  }
})