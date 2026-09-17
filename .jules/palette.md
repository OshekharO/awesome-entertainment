## 2026-03-31 - Label in Name (WCAG 2.5.3) & Decorative Icons
**Learning:** Overriding visible text on a button with an `aria-label` can violate WCAG 2.1 SC 2.5.3 (Label in Name) if the accessible name does not start with or match the visible text. For buttons with visible text and decorative inline icons, set `aria-hidden="true"` on the icon rather than overriding the visible text with `aria-label`.
**Action:** Always mark decorative inline icons with `aria-hidden="true"` and let visible button text serve as the accessible name.
