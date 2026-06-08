import { test, expect } from '@playwright/test';
import Home from '../pages/Home.page';
test('TestName', async ({ page }) => {
  await page.goto('/');
  let homePage=new Home(page);

  await homePage.filterBus();
});