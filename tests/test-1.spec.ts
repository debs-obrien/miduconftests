import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://miduconf.com/
  await page.goto('https://miduconf.com/');

  // Click text=#miduConf
  await page.locator('h1:has-text("#miduConf")').click();

  // Click a:has-text("Speakers")
  await page.locator('a:has-text("Speakers")').click();
  await expect(page).toHaveURL('https://miduconf.com/#speakers');

  // Click text=Debbie O'Brien Senior Program Manager, Microsoft >> h3
  await expect(page.locator('text=Debbie O\'Brien Senior Program Manager, Microsoft >> h3')).toBeVisible();

  // Click img[alt="Debbie O\'Brien"]
  await expect(page.locator('img[alt="Debbie O\\\'Brien"]')).toBeVisible;

  // Click a:has-text("Agenda")
  await page.locator('a:has-text("Agenda")').click();
  await expect(page).toHaveURL('https://miduconf.com/#agenda');

  // Click span:has-text("Agenda")
  await expect(page.locator('span:has-text("Agenda")')).toBeVisible();

  // Click text=17:00 15 min. 👋 Hola mundo, hola miduConf! Miguel Ángel Durán >> img
  await expect(page.locator('text=17:00 15 min')).toBeVisible();
});