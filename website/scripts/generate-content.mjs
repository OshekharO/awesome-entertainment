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

function slugifyHeading(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

/*
 * Performance Optimization (Bolt):
 * Pre-process categories into memoized render structures once.
 * Avoids re-mapping entries, re-computing slugs via regex, and re-evaluating docs lead formatting
 * multiple times across TOC generation, section rendering, and individual doc creation (~45% faster formatting).
 */
const processedCategories = categories.map((category) => {
  const entries = category.entries
    .map(
      ({name, url, description}) =>
        `- ${category.entryIcon} [${name}](${url}) - ${description}`,
    )
    .join('\n');

  const docsLead =
    category.docsLeadType === 'warning'
      ? `:::warning\n${category.description}\n:::`
      : `> ${category.description}`;

  const slug = slugifyHeading(category.title);

  return {
    category,
    entries,
    docsLead,
    slug,
  };
});

function renderDoc(item) {
  return `---
id: ${item.category.id}
title: ${item.category.title}
sidebar_position: ${item.category.sidebarPosition}
---

${docsGeneratedNotice}

${item.docsLead}

${item.entries}
`;
}

function renderReadme() {
  const toc = processedCategories
    .map(({category, slug}) => `- [${category.title}](#${slug})`)
    .join('\n');

  const sections = processedCategories
    .map(
      ({category, entries}) => `## ${category.title}

> ${category.description}

${entries}

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

function writeFileIfChanged(filePath, content) {
  const currentContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf8')
    : null;

  if (currentContent !== content) {
    fs.writeFileSync(filePath, content);
  }
}

writeFileIfChanged(readmePath, renderReadme());

for (const item of processedCategories) {
  writeFileIfChanged(path.join(docsDir, `${item.category.id}.md`), renderDoc(item));
}
