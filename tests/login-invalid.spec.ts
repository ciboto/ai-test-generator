import { test, expect } from '@playwright/test';

test('Exibe erro ao tentar login com credenciais inválidas com o site https://automationexercise.com', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.click('a[href="/login"]');
  await page.fill('[data-qa="login-email"]', 'usuario@invalido.com');
  await page.fill('[data-qa="login-password"]', 'senhaerrada');
  await page.click('[data-qa="login-button"]');
  await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
});
