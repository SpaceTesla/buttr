// src/utils/markdown-loader.ts
import fs from 'fs';
import path from 'path';

export function getButtrData() {
  const filePath = path.join(process.cwd(), 'src/data/buttr-data.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  return markdownContent;
}
