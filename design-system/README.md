# TASC Landing Page Design System

The website and landing page system for TASC Outsourcing and TASC Corporate Services (TCS). It turns the new TASC website design into tokens, components and page recipes, so every campaign page and thank you page starts out looking like the new site.

It sits beside the main TASC Design System, which stays the source for decks, reports and dashboards. Use this one for anything that ships as a campaign landing page or thank you page from the landing page repo. It does not cover AIQU.

## Where it comes from

Everything here is read from the Figma file "TASC - UI Design", page "For Dev Team":

| Template | What it gave this system |
| --- | --- |
| T19 Campaign Landing | Hero with form and thirteen section patterns |
| T20 Offer CTA Landing | Offer hero, key-info cards, split panel, CTA banner, FAQ, footer form |
| T17, T17A, T17B Thank you pages | Six thank you variants |
| T04B Business Setup KSA, T03C-E GRO/PRO | Comparison table, data table, accordions, case study, image and text |
| Header, Footer, Buttons, Input_field, Cards, Solution Cards, Step Card, _Tab, Accordion | Component variants and states |

Colour, type and spacing values are the Figma variables. Hover and disabled states are the Figma component variants.

## How to build a page with it

1. Load the fonts, then `tokens.css`, then `components/bundle.css`.
2. Wrap the page in `<div class="lp">` (or put the class on `<body>`).
3. Pick a recipe from **Landing page recipes** or **Thank you pages**.
4. Copy each section's markup from its component card and change the copy.
5. Embed the HubSpot form inside `.lp-form__body`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="bundle.css">
```

The system is plain HTML and CSS with class names prefixed `lp-`. It has no build step and no framework dependency, so it drops into a static page, Astro, Next or any template engine. Three patterns (ValueList, IndustriesSwitcher, TabsPanel) need a few lines of script, included with each. Accordions use native `<details>`.

### Working in Claude Code

Point Claude Code at this design system and tell it which recipe to build. A prompt that works:

> Build a landing page for [offer] using the TASC Landing Page Design System. Follow the "Lead generation" recipe. Use only the components and tokens in the system. Do not invent new colours, sizes or section layouts. The form is HubSpot form [ID] and redirects to the "Enquiry" thank you page.

Rules for agents and people building from this system:

- Use a token for every colour, radius and spacing value. If a value is not in `tokens.json`, it is not part of the system.
- Compose pages from the section components. Do not design new sections; if a page needs one, raise it so it can be added here.
- Keep the class names. They are the contract between pages and `bundle.css`.

## Visual foundations

**Colour.** Teal `bg-brand` `#005f83` is the brand colour: primary buttons, links, stat cards. Yellow `bg-brand-secondary` `#ffd100` is the action colour on dark and the hover colour for cards; it is always used with dark text. Near-black `bg-surface-dark` `#121d21` is the ink and the footer. Pages alternate white, `bg-surface-secondary` `#f7f9fa` and the dark gradient.

**The gradient.** Blue `brand-blue` `#00bfff` to green `brand-green` `#45db33`, left to right. It appears in four places only: the A in the logo, one highlighted phrase per section title, icons, and the blurred glow behind sections. Never use it as a button or card fill.

**Dark sections.** `gradient-dark` runs from `bg-dark-top` `#01354b` down to `#121d21`, with one large glow near the top. Text is white; the main button is yellow.

**Glass.** Cards are translucent: a 50% white-to-grey fill with a white hairline on light sections, a 30% dark fill on dark ones, both with backdrop blur. They need a glow or a photo behind them.

**Type.** Montserrat for headings, labels, buttons and form text. Inter for paragraphs and small print. The scale has few steps: 60/66 for the page title, 48/58 for section titles, 36/44 and 30/40 for feature text, 24/32 and 20/30 for card titles, 16/24 body, 14/20 small, 12/16 labels. Headings are Bold at 48px and above and SemiBold below.

**Shape.** Radius follows size: 8px for small buttons and tags, 12px for inputs and medium buttons, 16px for cards, 24px for images and panels, 32px for hero media and banners.

**Space.** Content is 1140px wide in a 1440px frame. Sections have 100px top and bottom padding. Columns and cards sit 24px apart. A section body starts 40px under its heading.

**Imagery.** Real GCC places and working people: Dubai and Riyadh landmarks, offices, aviation, energy. Photos behind text take the dark gradient at 60%. Image slots in the previews are striped placeholders; the system ships no photography.

## Iconography

Phosphor icons. Regular weight for content, Fill for ticks, phone, mail and social logos. Card icons are 32px in the gradient; step icons are white on a 44px gradient tile. `bundle.css` carries the icons used in the templates as `.lp-i-<name>` classes; see the Icon component.

## Writing for landing pages

- **Lead with the outcome and the place.** "The best recruitment agency in the UAE", "Launch your business in Saudi Arabia in record time".
- **Section titles are short claims** in Title Case, with one phrase highlighted: "Five reasons clients hand HR over to TASC".
- **Prove it with numbers.** Every page carries a stats band and at least one other proof block (awards, client logos, a quote, a case study).
- **One goal per page.** Every button asks for the same thing in the same words: "Talk to our team", "Request a proposal", "Send enquiry".
- **Card copy is one sentence.** Titles of two to four words.
- **Thank you pages say what happens next,** who has the enquiry, and how to reach a person now.
- Plain business English. No exclamation marks outside the one on the download thank you page.

### Figures need checking

The Figma comps use sample figures that do not agree with each other (15+ and 18+ years; NPS 78 and 74.7%; 68+ countries). The previews repeat them as placeholders. Confirm every number against the current approved proof points before a page goes live.

## Arabic

Pages can be English or Arabic. Set `dir="rtl" lang="ar"` on `<html>`; layouts mirror through logical CSS properties. The Figma Arabic pages do not assign an Arabic typeface, so this system falls back to IBM Plex Sans Arabic, a provisional choice. See the ArabicExample component for the rules.

## Forms

Forms are HubSpot forms. The page supplies the white card (`.lp-form`), the title and the redirect; HubSpot supplies the fields. Embed as raw HTML with HubSpot styling off, and `bundle.css` styles the fields to match. Each form redirects to one of the thank you recipes.

## Contrast notes

Three Figma values fall short of WCAG AA and are kept as designed, flagged for a decision: the gradient highlight in titles on white (about 2:1), `text-tertiary` for 12px meta text on white (3.4:1), and `input-text-critical` for 12px error text (3.9:1). Input borders at rest are 1.3:1, so every field keeps its visible label. Body text, buttons and everything on dark sections pass.

## What is not in Figma

These parts are proposals added so the system is usable, and should be confirmed:

- **Responsive behaviour.** Figma has 1440px desktop frames only. The tablet and phone rules in `bundle.css` (breakpoints at 1100px and 760px) are proposed.
- **Campaign header and compact footer.** Reduced versions of the site header and footer for paid-traffic pages.
- **Arabic typeface.** IBM Plex Sans Arabic, as above.
- **Focus styles.** A 2px teal outline (yellow on dark).

Not yet included: the animated home page sections, the cost calculator, the mega menu, blog and vacancy templates.
