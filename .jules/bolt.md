## 2026-03-30 - Fontsource full font CSS import bloat
**Learning:** Default Fontsource CSS imports (e.g., `@import '@fontsource/inter/400.css'`) load `@font-face` definitions for all supported character sets (Cyrillic, Greek, Vietnamese, Latin, etc.), bundling hundreds of kilobytes of unused CSS rules.
**Action:** For sites that primarily render Latin script, use language-specific subset imports (e.g., `@import '@fontsource/inter/latin-400.css'`) to eliminate unused `@font-face` declarations and dramatically shrink the render-blocking CSS bundle size.
