# 🧠 AI Test Generator — Gerador Inteligente de Testes com Playwright + OpenAI

> Gere testes E2E automaticamente a partir de descrições em linguagem natural usando OpenAI e Playwright.

---

## 🚀 O que este projeto faz?
Este sistema transforma descrições como:

> "Verificar se o usuário consegue adicionar um produto ao carrinho e ver o total atualizado."

...em um teste Playwright válido em TypeScript, como:

```ts
test('usuário pode adicionar produto ao carrinho', async ({ page }) => {
  await page.goto('/produtos');
  await page.click('text=Adicionar');
  await expect(page.locator('#total')).toContainText('R$');
});
```
---
## 📦 Tecnologias utilizadas

- 🤖 [OpenAI GPT (via API)](https://platform.openai.com/docs/overview)
- 🎭 [**Playwright**](https://playwright.dev/) 
- 💻 Node.js + TypeScript
- 🔐 dotenv para variáveis de ambiente
- 📂 CLI com ts-node
---
## 📁 Estrutura do projeto
```bash
.
├── src/
│   ├── generator.ts        # Lógica de geração com OpenAI
│   ├── index.ts            # Entrada principal via terminal
├── tests/                  # Testes gerados
│   ├── add-to-cart.spec.ts ✅ ← teste salvo com nome limpo baseado na descrição
├── .env                    # Chave de API da OpenAI
├── package.json
└── README.md
```
---
## ⚙️ Como usar
1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/ai-test-generator.git
cd ai-test-generator
```
2. Instale as dependências
```bash
npm install
```
3. Configure sua API Key da OpenAI
Crie um arquivo .env com o seguinte conteúdo:
```bash
OPENAI_API_KEY=sk-sua-chave-aqui
```
#### ⚠️ É necessário ter uma conta com acesso à API da OpenAI.
#### - Se estiver usando GPT-4, sua conta precisa estar habilitada. Caso contrário, use `gpt-3.5-turbo`.
---

## ✨ Gerando testes com linguagem natural
Use a CLI:
```bash
npx ts-node src/index.ts "Verificar se o usuário consegue logar com sucesso e ver o dashboard"
```
Isso irá:
- Enviar a descrição para a OpenAI
- Gerar código Playwright
- Salvar o teste gerado na pasta tests/

---
##🧪 Rodando os testes gerados
Execute os testes com Playwright:
```bash
npx playwright test tests/
```
---
### 💡 Exemplos de descrições válidas

| Descrição em linguagem natural                                  | O que será gerado                                        |
|------------------------------------------------------------------|-----------------------------------------------------------|
| "Usuário deve conseguir registrar uma conta"                     | Preenche formulário e valida mensagem de sucesso         |
| "Adicionar produto ao carrinho e ver total"                      | Clique no botão, valida preço                            |
| "Login inválido deve mostrar erro de autenticação"               | Tenta login inválido e valida erro                       |


---
### 🔐 Segurança
A chave da OpenAI está armazenada no .env
- Nunca suba esse arquivo para o GitHub
- Adicione .env ao seu .gitignore

### 📌 Possibilidades futuras
- UI web com formulário para geração de testes
- Suporte a múltiplos idiomas
- Geração de testes com tags (@smoke, @regression, etc.)
- Upload de páginas HTML para context-aware prompting

