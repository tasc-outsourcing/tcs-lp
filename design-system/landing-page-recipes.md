# Landing page recipes

Three page structures, each a fixed order of components from this system. Start from the closest one and remove sections you have no content for. Do not add sections that are not listed.

Every page: one goal, one button label, a form no more than one scroll away from any section, and at least two proof blocks.

## 1. Lead generation (T19 Campaign Landing)

For paid search and paid social traffic to a service: recruitment, staffing, PEO, Saudization.

| # | Component | Background | Job |
| --- | --- | --- | --- |
| 1 | Header (campaign) | White | Logo, phone, one CTA |
| 2 | HeroForm | Photo | Promise and the form |
| 3 | StatsBand | Dark | Four headline numbers |
| 4 | FeatureSplit | Grey | What TASC does, four cards |
| 5 | ValueList | White | Why hand it over |
| 6 | LogoStrip | Grey | Awards |
| 7 | BenefitsDark | Dark | Five benefits and a CTA |
| 8 | KpiImageBand | Photo | What the client gets |
| 9 | ProcessSteps | White | How it works, four steps |
| 10 | IndustriesSwitcher | Grey | Sector depth |
| 11 | TabsPanel with CtaBanner strip | White | Sub-sectors, catch-all CTA |
| 12 | FeatureSplit with Checklist | Grey | Why TASC |
| 13 | KpiCluster | Dark | Client satisfaction |
| 14 | Footer (compact) | Dark | Legal |

A shorter version for a single offer keeps 1, 2, 3, 4, 7, 9, 13 and 14.

## 2. Offer or gated content (T20 Offer CTA Landing)

For guides, reports, playbooks, webinars and calculators.

| # | Component | Background | Job |
| --- | --- | --- | --- |
| 1 | Header (campaign) | White | |
| 2 | HeroOffer | White | Title, cover image, two buttons |
| 3 | InfoCard row over a photo | Photo | Format, length, time to read, what arrives |
| 4 | Three SolutionCards under a left-aligned SectionHeading | White | Why this matters |
| 5 | SplitPanel with numbered list | White | What's inside |
| 6 | TrustBand | Grey | Quote and client logos |
| 7 | CtaBanner (banner) | White | Two channels, one goal |
| 8 | ProcessSteps | Grey | What happens after you submit |
| 9 | Faq | White | Objections |
| 10 | FormSection | Dark | The form |
| 11 | Footer (compact) | Dark | |

## 3. TCS service page (T04B Business Setup, T03C-E GRO/PRO)

For business setup, PRO, GRO, visas and other corporate services, in the TASC look.

| # | Component | Background | Job |
| --- | --- | --- | --- |
| 1 | Header (campaign) | White | |
| 2 | HeroOffer | White | Service, place, two buttons, stat chips |
| 3 | Glass cards with a CtaBanner strip | White | Who it is for, what you are accountable for |
| 4 | SplitPanel with filled Accordion | White | What is included |
| 5 | Accordion with DataTable | White | Obligations and deadlines |
| 6 | TrustBand | Grey | |
| 7 | BenefitsDark | Dark | What TASC manages |
| 8 | ComparisonTable | Dark | Own entity vs TASC, or mainland vs free zone |
| 9 | CaseStudy | White | One result |
| 10 | ImageText | White | Country-specific note (PRO in UAE, GRO in KSA) |
| 11 | Faq | White | |
| 12 | FormSection | Dark | |
| 13 | Footer (compact) | Dark | |

Do not place two dark sections back to back; if steps 7 and 8 are both used, put the CaseStudy between them.

## Rhythm rules

- Alternate backgrounds: white, grey, dark or photo. Never the same twice in a row, except white after white when one of them is a full-bleed SplitPanel.
- Dark sections are for proof and for the form. Two or three per page.
- Section titles: one highlighted phrase each. Centre the title above grids; left-align it inside splits.
- Buttons: teal on white and grey, yellow on dark and photo. Small (40px) inside sections, medium (48px) in heroes and forms.
- Every CTA either scrolls to `#form` or opens the same HubSpot form.

## Page checklist

- [ ] One `<h1>`, in the hero. Section titles are `<h2>`, card titles `<h3>`.
- [ ] Fonts, `tokens.css`, `bundle.css` loaded; page wrapped in `.lp`.
- [ ] HubSpot form embedded as raw HTML inside `.lp-form__body`; redirect set to the right thank you page.
- [ ] Every figure, award and client logo confirmed.
- [ ] Images sized for their slot, with alt text; decorative photos have empty alt.
- [ ] Arabic version: `dir="rtl" lang="ar"`, copy reviewed by a native speaker.
- [ ] Checked at 1440, 1024, 768 and 390px wide.
