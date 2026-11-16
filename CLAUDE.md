# TCS landing pages

Read `LANDING_PAGE_RULES.md` before creating, editing, building or deploying any landing page. It covers routes, the combined build and what must never be removed.

## Design system
All landing pages and thank you pages are built from `design-system/`.
- Read `design-system/README.md` first, then the recipe in `landing-page-recipes.md` or `thank-you-pages.md`.
- Load `design-system/tokens.css` then `design-system/bundle.css`. Wrap the page in `.lp`.
- Copy section markup from `design-system/components/<Name>/README.md`. Open `example.html` beside it to see the result.
- Use only tokens and components from the system. Do not add colours, sizes or new section layouts.
- Forms are HubSpot embeds inside `.lp-form__body`.

`design-system/` is not deployed. Each page copies `tokens.css`, `bundle.css` and the logos it uses into its own `assets/` folder, so a later change to the system does not alter a live page until that page is rebuilt.
