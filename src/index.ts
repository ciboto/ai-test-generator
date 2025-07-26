import { generateTestCode } from './generator';
import fs from 'fs/promises';
import path from 'path';

async function main() {
  const input = process.argv.slice(2).join(' ');

  if (!input) {
    console.error('❌ Forneça uma descrição do teste.');
    process.exit(1);
  }

  const code = await generateTestCode(input);
  console.log('\n✅ Teste gerado:\n');
  console.log(code);

  const filename = path.resolve(`tests/generated-${Date.now()}.spec.ts`);
  await fs.writeFile(filename, code);
  console.log(`\n📝 Arquivo salvo em: ${filename}`);
}

main();
