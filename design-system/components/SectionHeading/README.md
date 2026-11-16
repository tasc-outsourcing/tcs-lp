Section title with one gradient-highlighted phrase and an optional lead paragraph.

**Figma source:** T19 Campaign Landing, every section title

## Rules

- One `h2.lp-title` per section, 48/58 Montserrat Bold. Wrap one or two phrases in `span.lp-hl` for the blue-to-green gradient. Never highlight the whole title.
- Centre it (`.lp-head`) above grids and bands. Use `.lp-head--start` when the title sits in the left column of a split.
- Lead paragraph is Inter 16/24 in `text-secondary`, 16px under the title. On dark sections it turns white automatically.
- Titles in the Figma file are Title Case with the first word of each highlighted phrase capitalised. Keep them under about 45 characters per line.

## Markup

```html
<div class="lp-head">
  <h2 class="lp-title"><span class="lp-hl">Five reasons</span> clients hand HR over to <span class="lp-hl">TASC</span></h2>
  <p class="lp-lead">Recognised by leading industry bodies for excellence in staffing, compliance, and service quality across the Gulf.</p>
</div>
<div class="lp-head lp-head--start" style="margin-top:56px">
  <h2 class="lp-title">Why this matters <span class="lp-hl">before your next hire</span></h2>
  <p class="lp-lead">The case for acting, before anything is asked of you.</p>
</div>
```
