import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on Playwright home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
});

When('I click link "Get started"', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
});

When('I click the link of "{string}"', async ({ page }, text: string) => {
  await page.getByRole('link', { name: text }).click();
});

Then('I see in title {string}', async ({ page }, text: string) => {
  await expect(page).toHaveTitle(new RegExp(text));
});