# Thank you pages

Every form has a thank you page, and every thank you page is one of the five recipes below. Pick by what the visitor just did. Do not design a new one.

All five share the same frame: the full site Header (the visitor has converted, so navigation is welcome), the HeroThankYou, a recipe-specific middle, three "what happens next" step cards, and the full Footer.

## Which recipe

| The visitor just… | Recipe | Figma |
| --- | --- | --- |
| Sent an enquiry or proposal request | 1. Enquiry | T17 Thank You: Business Enquiry |
| Applied for a job or registered a CV | 1. Enquiry, application wording | T17 Thank You: Form Confirmation |
| Downloaded a guide or report | 2. Download | T17A Gated Download |
| Asked for a call and must pick a time | 3. Book a time | T17B CTA Landing / Booking |
| Booked a call | 4. Call booked | T17B Booking confirmed |
| Used a calculator or got an estimate | 5. Estimate | T17 Calculator form submitted |

## 1. Enquiry

| # | Component | Notes |
| --- | --- | --- |
| 1 | Header (full) | |
| 2 | HeroThankYou with summary | "Your proposal request is with our Corporate Services team" |
| 3 | ProcessSteps, three steps | "From Application to Reply": confirm by email, review, come back |
| 4 | ContactStrip | Phone, email, back to form |
| 5 | TrustBand | Quote and client logos |
| 6 | ArticleCard block | "Intelligence Hub": one large, three rows, View all |
| 7 | Footer (full) | |

## 2. Download

| # | Component | Notes |
| --- | --- | --- |
| 1 | Header (full) | |
| 2 | HeroThankYou, no summary | "A great big thank you!" with the email address in bold |
| 3 | DownloadPanel | Details and the Download button |
| 4 | ProcessSteps, three steps | What to do with the guide, or what TASC does next |
| 5 | ContactStrip | |
| 6 | ArticleCard block | Related reading for the same market |
| 7 | Footer (full) | |

## 3. Book a time

| # | Component | Notes |
| --- | --- | --- |
| 1 | Header (full) | |
| 2 | HeroThankYou, no summary | "You're in — pick a time for your call", with the reference |
| 3 | BookingPanel | HubSpot meetings embed in the booking frame |
| 4 | ProcessSteps, three steps | "Once you have picked a time" |
| 5 | Footer (full) | |

## 4. Call booked

| # | Component | Notes |
| --- | --- | --- |
| 1 | Header (full) | |
| 2 | HeroThankYou, no summary | "Your call is booked" |
| 3 | CallConfirmed | Details, add to calendar, reschedule |
| 4 | ProcessSteps, three steps | "How to make most of it" |
| 5 | Footer (full) | |

## 5. Estimate

| # | Component | Notes |
| --- | --- | --- |
| 1 | Header (full) | |
| 2 | HeroThankYou, no summary | Same headline as recipe 3 |
| 3 | ConsultantCard beside a compact calendar | 655 : 461 split inside a grey band |
| 4 | ProcessSteps, three steps | Before, during and after the call |
| 5 | Footer (full) | |

## Copy pattern

- **Headline:** what happened, in the visitor's terms, as a statement. Up to two lines at 60/66.
- **Paragraph:** who has it, what they do next, when, and that nothing more is needed. Put the visitor's email, the asset name or the booking reference in bold.
- **Steps:** three, in order, each naming who acts. Step 1 is always the confirmation email.
- **Never** a bare "Thank you for contacting us".

## Technical notes

- Thank you pages are `noindex`.
- Pass the values for the summary and the hero through the redirect URL (or HubSpot personalisation tokens) and write them in with script. If a value is missing, remove its row; do not show placeholders.
- Fire the conversion event on page load, once.
- The page must still read correctly with no personal values at all, since people revisit and share these URLs.
