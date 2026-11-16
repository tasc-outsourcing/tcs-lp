Breadcrumb trail above the hero title.

**Figma source:** Breadcrums component

## Rules

- Inter 14/20. Inactive crumbs are `text-tertiary`; the current page is teal on light heroes and white on image or dark heroes (handled by the parent class).
- Optional on campaign pages. Keep it when the page sits under a real section of the main site; drop it on standalone paid-traffic pages.

## Markup

```html
<nav aria-label="Breadcrumb"><ol class="lp-breadcrumbs"><li><a href="#">Home</a></li><li><a href="#">Offers</a></li><li aria-current="page">The 2026 GCC Salary &amp; Hiring Guide</li></ol></nav>
```
