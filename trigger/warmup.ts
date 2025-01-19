import { schedules } from "@trigger.dev/sdk/v3";
import puppeteer from "puppeteer-core";
import chrome from "@sparticuz/chromium";

// Warmup runs every 30 minutes
export const warmup = schedules.task({
  id: "warmup",
  cron: "*/30 * * * *",
  run: async (payload) => {
    const now = new Date(payload.timestamp);
    console.log(`[Server] Starting refresh at ${now}`);

    try {
      const executablePath = await chrome.executablePath();

      const browser = await puppeteer.launch({
        args: [
          ...chrome.args,
          "--hide-scrollbars",
          "--disable-web-security",
          "--no-sandbox",
          "--disable-setuid-sandbox"
        ],
        defaultViewport: chrome.defaultViewport,
        executablePath,
        headless: chrome.headless,
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