const puppeteer = require("puppeteer");

(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1250,1080"],
  });
  const page = await browser.newPage();

  await page.goto("https://namastedev.com/");
  await page.setViewport({ width: 1250, height: 1080 });
  console.log("Launched e2e testing page");

  /**
   * get the DOM element link by using selectors manually (id or class names)
   * Example: document.querySelector(".menu > li:nth-child(3) > a")
   */
  const courseLink = ".menu > li:nth-child(3) > a";

  await page.waitForSelector(courseLink); // waiting for the selector to load onto DOM/webpage
  await page.click(courseLink);

  console.log("Course page loaded");

  /**
   * Add class names for each button or any ul links if you want to do testing with automation
   * document.querySelector(".bg-success-btn")
   *   */

  const enrollBtn = ".bg-success-btn";

  await page.waitForSelector(enrollBtn);
  await page.click(enrollBtn);

  console.log("Namaste SDF page loaded");

  //We can automate to collect all logs and send to developer

  await browser.close();
})();

/**
 * Homework:
 * Automate the whole use journey
 * Run this script everyday at 8.00 am  CRON job
 * Collect all logs at the end and send an email - Amazon SES
 */
