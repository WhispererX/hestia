#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import process from 'process';

const OLD_NAME = 'react-template';
const NEW_NAME = process.argv[2];

if (!NEW_NAME) {
  console.error('Usage: node scripts/rename-project.js <new-project-name>');
  process.exit(1);
}

const ROOT_DIR = process.cwd();

const IGNORE_DIRS = new Set([
  'node_modules',
  'dist',
  'build',
  '.git',
  '.vite',
  '.electron',
]);

function shouldIgnore(filePath) {
  return [...IGNORE_DIRS].some(dir =>
    filePath.split(path.sep).includes(dir)
  );
}

function replaceInFile(filePath) {
  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return;

    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes(OLD_NAME)) return;

    const updated = content.replaceAll(OLD_NAME, NEW_NAME);
    fs.writeFileSync(filePath, updated, 'utf8');

    console.log(`✔ Updated: ${path.relative(ROOT_DIR, filePath)}`);
  } catch { }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);

    if (shouldIgnore(fullPath)) continue;

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      replaceInFile(fullPath);
    }
  }
}

console.log(`Renaming "${OLD_NAME}" → "${NEW_NAME}"`);
walk(ROOT_DIR);
console.log('Done.');
