import { test, expect } from '@playwright/test';

test('Usuário pode adicionar produto ao carrinho e ver o total atualizado com o site https://automationexercise.com', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.click('a[href="/products"]');
  await expect(page.locator('.features_items')).toBeVisible();
  await page.hover('.product-image-wrapper >> nth=0');
  await page.click('text=Add to cart');
  await page.click('a[href="/view_cart"]');
  await expect(page).toHaveURL(/.*\/view_cart/);
  const total = page.locator('.cart_total_price');
  await expect(total).toBeVisible();
  await expect(total).not.toHaveText('$0');
});
