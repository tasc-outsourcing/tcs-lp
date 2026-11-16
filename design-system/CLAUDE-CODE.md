# Using this folder in the landing page repo

1. Copy this folder into the repo as `design-system/`.
2. Add this to the repo's `CLAUDE.md`:

```
## Design system
All landing pages and thank you pages are built from `design-system/`.
- Read `design-system/README.md` first, then the recipe in `landing-page-recipes.md` or `thank-you-pages.md`.
- Load `design-system/tokens.css` then `design-system/bundle.css`. Wrap the page in `.lp`.
- Copy section markup from `design-system/components/<Name>/README.md`. Open `example.html` beside it to see the result.
- Use only tokens and components from the system. Do not add colours, sizes or new section layouts.
- Forms are HubSpot embeds inside `.lp-form__body`.
```

`tokens.css` here is compiled from `tokens.json`. The published design system is the source of truth; if tokens change there, regenerate this file.
