import { test, expect } from "@playwright/test";
import isMobile from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://shift.infobip.com/
  await page.goto("https://shift.infobip.com/");

  // Click text=This website uses cookies
  await expect(page.locator("text=This website uses cookies")).toBeVisible();

  // Click #CybotCookiebotDialogBodyButtonAccept
  await page.locator("#CybotCookiebotDialogBodyButtonAccept").click();

  // Click h1:has-text("Infobip Shift Conference")
  await expect(
    page.locator('h1:has-text("Infobip Shift Conference")')
  ).toBeVisible();

  if (isMobile) {
    await page.locator(".nav-btn").click();
  }

  await page.locator("header >> text=Speakers").click();

  // Click text=Meet Our Speakers
  await expect(page.locator("text=Meet Our Speakers")).toBeVisible();

  // Click #ib-button-messaging-icon
  await page.locator("#ib-button-messaging-icon").click();

  // Click text=Location
  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.frameLocator("#ib-iframe-messaging").locator("text=Location").click(),
  ]);

  // Click text=Event Location
  await expect(page1.locator("text=Event Location")).toBeVisible();

  // Click text=FAQTickets >> span
  await expect(page1.locator("text=FAQTickets >> span")).toBeVisible();

  // Click text=Late Student
  await page1.locator("text=Late Student").click();

  // Select 1
  await page1
    .locator(
      "text=Late StudentPass40€+ VAT2-Day Conference PassAccess to Multiple StagesAccess to  >> select"
    )
    .selectOption("1");

  // Click text=Order Now
  const [page2] = await Promise.all([
    page1.waitForEvent("popup"),
    page1.locator("text=Order Now").click(),
  ]);

  // Click text=Total: 3340.00 HRK(443,29 EUR)
  await expect(
    page2.locator("text=Total: 3340.00 HRK(443,29 EUR)")
  ).toBeVisible();

  // Click #speakersNav-right >> text=→
  await page.locator("#speakersNav-right >> text=→").click();

  // Click #speakersNav-right >> text=→
  await page.locator("#speakersNav-right >> text=→").click();
});
