import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateTestCode(description: string): Promise<string> {
  const prompt = `
Você é um assistente que gera testes automatizados com Playwright em TypeScript.
Gere um teste completo baseado na seguinte descrição em linguagem natural:

"${description}"

Siga o padrão do Playwright, usando 'test' e 'expect'.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
  });

  return response.choices[0].message.content ?? '';
}
