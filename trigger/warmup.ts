import { schedules } from "@trigger.dev/sdk/v3";
import puppeteer from "puppeteer";

// Warmup runs every hour
export const warmup = schedules.task({
  id: "warmup",
  cron: "*/30 * * * *",
  run: async (payload) => {
    const now = new Date(payload.timestamp);
    console.log(`[Server] Starting refresh at ${now}`);

    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-software-rasterizer',
          '--hide-scrollbars',
          '--disable-extensions'
        ]
      });

      const page = await browser.newPage();
      await page.goto(process.env.NEXT_PUBLIC_SITE_URL!, {
        waitUntil: "networkidle0"
      });

      // Wait for content to load
      await page.waitForSelector('[data-testid="projects-grid"]', {
        timeout: 10000
      });

      // Screenshot for verification
      await page.screenshot({ 
        path: '/tmp/warmup-screenshot.png',
        fullPage: true 
      });

      console.log(`[Server] Warmup successful - page loaded with content`);

      await browser.close();
    } catch (error) {
      console.error(`[Server] Error during warmup: ${error}`);
      throw error;
    }
  }
})