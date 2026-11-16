FAQ section: title and a help card on the left, the question list on the right.

**Figma source:** FAQ component (BG=White) (4241:128244)

## Rules

- 461 : 655 split. Left: title with "Questions" highlighted, one line of text, and a grey help card (363px, 16px radius) with a full-width yellow button.
- Right: lined accordions. Six to ten questions on a landing page; the Figma template shows fourteen for SEO pages.
- Write questions the way buyers ask them. Add FAQPage structured data for the same questions.

## Markup

```html
<section class="lp-section">
  <div class="lp-container"><div class="lp-split">
    <div><h2 class="lp-title">Frequently Asked <span class="lp-hl">Questions</span></h2><p class="lp-lead" style="color:var(--text-primary)">Get answers to common questions about our contract staffing services.</p>
      <div class="lp-faq-card"><h3 class="lp-card__title">Still have questions?</h3><p>Talk to a TASC specialist — most clients get a shortlist within 48 hours.</p><a class="lp-btn lp-btn--sm lp-btn--secondary lp-btn--block" href="#form">Talk to our team <span class="lp-icon lp-i-caret-right-fill lp-icon--16 lp-icon--flip" aria-hidden="true"></span></a></div></div>
    <div>
      <details class="lp-accordion"><summary><span class="lp-accordion__num">01</span><span class="lp-accordion__title">Can I convert contract staff to permanent employees?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Yes. Conversion terms are agreed up front.</div></details>
      <details class="lp-accordion"><summary><span class="lp-accordion__num">02</span><span class="lp-accordion__title">Is contract staffing legal in the UAE?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Yes, through licensed providers.</div></details>
      <details class="lp-accordion" open><summary><span class="lp-accordion__num">03</span><span class="lp-accordion__title">What is the difference between contract staffing and permanent recruitment?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">With contract staffing, TASC employs the associate and manages visas, payroll and compliance while they work for you. With permanent recruitment, we source and screen and you employ directly.</div></details>
      <details class="lp-accordion"><summary><span class="lp-accordion__num">04</span><span class="lp-accordion__title">How much do contract staffing services cost in Dubai?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Pricing depends on role, volume and contract length.</div></details>
      <details class="lp-accordion"><summary><span class="lp-accordion__num">05</span><span class="lp-accordion__title">How do I get started with contract staffing at TASC?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Send an enquiry and a consultant will call you.</div></details>
    </div>
  </div></div>
</section>
```
