Expandable rows in two styles: lined for FAQs, filled for in-section detail.

**Figma source:** Accordion component (For=Footer, For=Inner section)

## Rules

- Built on `<details>` and `<summary>`, so it works without script and is keyboard accessible.
- **Lined** (`.lp-accordion`): hairline under each row, plus and minus icon. Used in the FAQ.
- **Filled** (`.lp-accordion--filled`): grey 12px-radius rows 12px apart with a teal caret; the open row darkens to `bg-surface-tertiary`. Used beside an image or a table.
- Two-digit number, Montserrat SemiBold 16/24 question, Inter 14/20 answer. Keep one item open by default.

## Markup

```html
<div class="lp-grid lp-grid--2">
  <div>
    <details class="lp-accordion"><summary><span class="lp-accordion__num">01</span><span class="lp-accordion__title">Can I convert contract staff to permanent employees?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Yes. Conversion terms are agreed up front in your service agreement.</div></details>
    <details class="lp-accordion" open><summary><span class="lp-accordion__num">02</span><span class="lp-accordion__title">What is the difference between contract staffing and permanent recruitment?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">With contract staffing, TASC employs the associate and manages visas, payroll and compliance while they work for you. With permanent recruitment, we source and screen and you employ directly.</div></details>
    <details class="lp-accordion"><summary><span class="lp-accordion__num">03</span><span class="lp-accordion__title">How much do contract staffing services cost in Dubai?</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Pricing depends on role, volume and contract length.</div></details>
  </div>
  <div>
    <details class="lp-accordion lp-accordion--filled" open><summary><span class="lp-accordion__num">01</span><span class="lp-accordion__title">Work permits and labour contracts</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">New permits, renewals and cancellations filed through MoHRE, with the contract issued and signed before the employee needs it.</div></details>
    <details class="lp-accordion lp-accordion--filled"><summary><span class="lp-accordion__num">02</span><span class="lp-accordion__title">Residence visas and entry permits</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Entry permits, medicals, Emirates ID and visa stamping.</div></details>
    <details class="lp-accordion lp-accordion--filled"><summary><span class="lp-accordion__num">03</span><span class="lp-accordion__title">Emirates ID</span><span class="lp-accordion__icon"></span></summary><div class="lp-accordion__body">Applications and renewals.</div></details>
  </div>
</div>
```
