A list of large reasons on the left; the selected one explains itself on the right.

**Figma source:** T19 › Core Value (4675:171700)

## Rules

- Items are Montserrat SemiBold 36/44 in `text-secondary`; the selected or hovered item turns teal. The right panel is Montserrat SemiBold 30/40.
- Five items maximum. Each is two or three words; the explanation is one sentence.
- Needs a few lines of script to swap the panel text (included in the preview source). Without script, show the first explanation.
- The Figma design draws a hand-drawn teal arrow from the selected item to the panel. It is decorative and left out here; add it as an SVG only on desktop if wanted.

## Markup

```html
<section class="lp-section">
  <span class="lp-glow lp-glow--soft" style="inset-inline-start:43%;top:-9px;width:714px;height:618px"></span>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title"><span class="lp-hl">Five reasons</span> clients hand HR over to <span class="lp-hl">TASC</span></h2><p class="lp-lead">Six core values define who we are, and how we do what we do.</p></div>
    <div class="lp-value lp-body" data-lp-value>
      <div role="tablist" aria-orientation="vertical">
        <button class="lp-value__item" role="tab" aria-selected="true" data-text="We offer ISO-certified operations and SLA-based commitments — dependable delivery you can plan around.">Reduced cost</button>
        <button class="lp-value__item" role="tab" aria-selected="false" data-text="Submit a requirement and receive shortlisted, pre-screened candidates within 48 hours.">Fast hiring process</button>
        <button class="lp-value__item" role="tab" aria-selected="false" data-text="Every candidate is vetted from a database of more than 900,000 professionals.">Better talent quality</button>
        <button class="lp-value__item" role="tab" aria-selected="false" data-text="Dashboards and reporting at every stage of the hiring funnel.">Analytics &amp; reporting</button>
        <button class="lp-value__item" role="tab" aria-selected="false" data-text="Hiring that follows labour law in every market we operate in.">100% compliance</button>
      </div>
      <p class="lp-value__panel" role="tabpanel">We offer ISO-certified operations and SLA-based commitments — dependable delivery you can plan around.</p>
    </div>
  </div>
</section>
```

## Script

```html
<script>
document.querySelectorAll('[data-lp-value]').forEach(function(root){var p=root.querySelector('[role=tabpanel]');root.querySelectorAll('[role=tab]').forEach(function(t){t.addEventListener('click',function(){root.querySelectorAll('[role=tab]').forEach(function(x){x.setAttribute('aria-selected',x===t)});p.textContent=t.dataset.text})})});
</script>
```
