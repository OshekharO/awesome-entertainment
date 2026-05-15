import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const dataPath = path.join(repoRoot, 'data', 'listings.json');
const readmePath = path.join(repoRoot, 'README.md');
const docsDir = path.join(repoRoot, 'website', 'docs');

const {categories} = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const divider = '\n---\n';
const readmeGeneratedNotice =
  '<!-- This file is generated from data/listings.json. Edit that file and run npm run generate -->';
const docsGeneratedNotice =
  '{/* This file is generated from data/listings.json. Edit that file and run npm run generate */}';

function renderEntries(category) {
  return category.entries
    .map(
      ({name, url, description}) =>
        `- ${category.entryIcon} [${name}](${url}) - ${description}`,
    )
    .join('\n');
}

function renderDocsLead(category) {
  if (category.docsLeadType === 'warning') {
    return `:::warning\n${category.description}\n:::`;
  }

  return `> ${category.description}`;
}

function renderDoc(category) {
  return `---
id: ${category.id}
title: ${category.title}
sidebar_position: ${category.sidebarPosition}
---

${docsGeneratedNotice}

${renderDocsLead(category)}

${renderEntries(category)}
`;
}

function renderReadme() {
  const toc = categories
    .map((category) => `- [${category.title}](#${slugifyHeading(category.title)})`)
    .join('\n');

  const sections = categories
    .map(
      (category) => `## ${category.title}

> ${category.description}

${renderEntries(category)}

[↑ Back to top](#-table-of-contents)`,
    )
    .join(`${divider}\n`);

  return `# Awesome Entertainment 🎉

${readmeGeneratedNotice}

> A curated list of actively maintained apps, extensions, and platforms for streaming, manga, anime, and reading. Focused on open-source, stable, and developer-friendly ecosystems.

---

# 📌 Disclaimer

* Many free streaming websites are **unstable / illegal / not maintained**
* Prefer:

  * ✅ Apps + Extensions
  * ✅ Open-source ecosystems
  * ⚠️ Websites only as fallback

---

## 📋 Table of Contents

${toc}

---

${sections}

---

<h4 align='center'>© 2026 ツ OshekharO</h4>
`;
}

function slugifyHeading(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

function writeFileIfChanged(filePath, content) {
  const currentContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf8')
    : null;

  if (currentContent !== content) {
    fs.writeFileSync(filePath, content);
  }
}

writeFileIfChanged(readmePath, renderReadme());

for (const category of categories) {
  writeFileIfChanged(path.join(docsDir, `${category.id}.md`), renderDoc(category));
}
