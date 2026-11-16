Icon, title and short text on a glass card, in light and dark versions.

**Figma source:** Solution Cards (Work with, Work with On light BG, Hover)

## Rules

- The workhorse card. 24px padding, 16px radius, 32px gradient icon, title in Montserrat SemiBold 20/30, text in Inter 14/20.
- Light (`.lp-card`): 50% white-to-grey gradient with a 1px white border and backdrop blur. Needs a glow or tinted background behind it to read as glass; on plain white add a glow to the section.
- Dark (`.lp-card--dark`): 30% `#121d21` fill on a dark gradient section, white text.
- When the whole card is a link (`a.lp-card`) it turns yellow on hover with dark text and icon, as in the Figma hover variant.
- Titles: two to four words. Text: one sentence, two at most. Keep cards in a row the same length.

## Markup

```html
<div class="lp-grid lp-grid--2">
  <div style="position:relative;overflow:hidden;padding:24px;border-radius:16px;background:var(--bg-surface-secondary)"><span class="lp-glow lp-glow--soft" style="inset-inline-end:-100px;top:-80px"></span>
    <div class="lp-grid lp-grid--2" style="position:relative">
      <a class="lp-card" href="#"><span class="lp-icon lp-i-users-four lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Contract Staffing</h3><p class="lp-card__text">Comprehensive staffing solutions tailored for both immediate and future needs, including visa management and payroll services.</p></a>
      <div class="lp-card"><span class="lp-icon lp-i-user-check lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Permanent Recruitment</h3><p class="lp-card__text">Effectively recruit top-tier talent from local and international markets.</p></div>
    </div>
  </div>
  <div style="position:relative;overflow:hidden;padding:24px;border-radius:16px;background:var(--gradient-dark)"><span class="lp-glow lp-glow--dark"></span>
    <div class="lp-grid lp-grid--2" style="position:relative">
      <div class="lp-card lp-card--dark"><span class="lp-icon lp-i-currency-circle-dollar lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Reduced cost</h3><p class="lp-card__text">Lower the total cost of hiring and workforce management.</p></div>
      <div class="lp-card lp-card--dark"><span class="lp-icon lp-i-lightning lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Fast hiring process</h3><p class="lp-card__text">The right candidate resumes in as little as 48 hours.</p></div>
    </div>
  </div>
</div>
```
