// tests/register.spec.ts
import { test, expect } from '@playwright/test';

test('Usuário pode se registrar com sucesso no site automationexercise.com', async ({ page }) => {
  // Acessa a página inicial
  await page.goto('https://automationexercise.com');

  // Verifica se a home carregou corretamente
  await expect(page).toHaveURL(/automationexercise\.com/);
  await expect(page.locator('a:has-text("Home")')).toBeVisible();

  // Clica em "Signup / Login"
  await page.click('a:has-text("Signup / Login")');

  // Verifica se o formulário de cadastro é visível
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // Preenche nome e email
  const nome = 'TesteUsuário';
  const email = `usuario${Date.now()}@teste.com`; // email único
  await page.fill('input[name="name"]', nome);
  await page.fill('input[data-qa="signup-email"]', email);
  await page.click('button[data-qa="signup-button"]');

  // Verifica se o formulário de informações da conta está visível
  await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

  // Preenche dados obrigatórios
  await page.check('input#id_gender1'); // Título: Mr.
  await page.fill('input#password', 'SenhaForte123');
  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '1990');

  // Preenche informações adicionais
  await page.fill('input#first_name', 'Teste');
  await page.fill('input#last_name', 'Usuário');
  await page.fill('input#address1', 'Rua Teste 123');
  await page.selectOption('#country', 'Canada');
  await page.fill('input#state', 'EstadoTeste');
  await page.fill('input#city', 'CidadeTeste');
  await page.fill('input#zipcode', '123456');
  await page.fill('input#mobile_number', '11999999999');

  // Submete o formulário
  await page.click('button[data-qa="create-account"]');

  // Verifica se a conta foi criada com sucesso
  await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();

  // Clica em "Continue"
  await page.click('a[data-qa="continue-button"]');

  // Espera que o usuário esteja logado
  await expect(page.locator('a:has-text("Logged in as")')).toContainText(nome);

  // (Opcional) Logout e verificação
  await page.click('a:has-text("Logout")');
  await expect(page.locator('a:has-text("Signup / Login")')).toBeVisible();
});
