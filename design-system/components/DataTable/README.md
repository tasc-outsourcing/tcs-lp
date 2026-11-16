Light table with a tinted header row, for obligations, licences and fees.

**Figma source:** T03C-E GRO/PRO › Accordion and table (3290:163142)

## Rules

- 16px-radius frame with a 1px `border-primary`; header cells in `#e6f5fa` with Montserrat SemiBold 16/24; body cells white, Inter 16/24, 16px padding.
- Scrolls sideways inside its frame on small screens. Keep to four or five columns.
- Often paired with filled accordions on the left (461 : 655 split) explaining the consequences of each row.

## Markup

```html
<div class="lp-table-wrap"><table class="lp-table">
  <thead><tr><th>Obligation</th><th>Frequency</th><th>Trigger</th><th>Authority</th></tr></thead>
  <tbody><tr><td>Work permit renewal</td><td>Per contract term</td><td>Ahead of permit expiry</td><td>MoHRE</td></tr><tr><td>Residence visa renewal</td><td>Per visa term</td><td>Ahead of visa expiry</td><td>GDRFA</td></tr><tr><td>Emirates ID renewal</td><td>Per card term</td><td>With the residence visa</td><td>Emirates ID authority</td></tr><tr><td>Establishment card renewal</td><td>Annual</td><td>Ahead of card expiry</td><td>MoHRE</td></tr></tbody>
</table></div>
```
