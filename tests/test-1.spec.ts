import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //await page.goto('https://test.sambasafety.io/');
  await page.goto('https://test.sambasafety.io/login');
  await page.getByLabel('Username').fill('ssjunipero+rayfferclarity@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  //await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('G0F0rBr0ke!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  //await page.goto('https://test.sambasafety.io/mvr/monitoring');
  await page.getByRole('link', { name: 'People' }).click();
  await page.locator('button').filter({ hasText: 'addperson' }).click();
  //await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('person 1');
  //await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('playwright');
  //await page.getByLabel('Group*').click();
  //await page.locator('#list-item-567-0').getByText('group aaaaa').click();
  await page.locator(':nth-child(4) > .v-input__icon > .v-icon').click();
  await page.locator('.v-list-item__title').nth(0).click()
  await page.getByRole('button', { name: 'Save and Close' }).click();
});