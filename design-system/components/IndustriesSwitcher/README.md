Vertical list of industries that switches a large image panel with tags, a market figure and two buttons.

**Figma source:** T19 › Industries (4675:171835)

## Rules

- Left rail: 220px, Montserrat SemiBold 14/20 items 56px apart on a 1px `border-secondary` line; the selected item is teal with a yellow segment on the rail.
- Panel: 896 × 496, 24px radius, a photo (add an `<img>` as the first child) under a top-and-bottom dark fade. Title 36/44, glass tags, a market figure (18/28 label, 36/44 value), and a yellow plus a light-blue small button.
- Six industries in the rail; link out to the rest with the x-small tertiary button.
- On phones the rail becomes a horizontal scroller above the panel.

## Markup

```html
<section class="lp-section lp-section--soft">
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title"><span class="lp-hl">Industries</span> We Recruit for</h2><p class="lp-lead">Deep specialist networks across the sectors that power the region.</p></div>
    <div class="lp-industries">
      <div>
        <div class="lp-industries__list" role="tablist" aria-orientation="vertical"><button class="lp-industries__item" role="tab" aria-selected="true">Energy</button><button class="lp-industries__item" role="tab" aria-selected="false">Government</button><button class="lp-industries__item" role="tab" aria-selected="false">Automotive</button><button class="lp-industries__item" role="tab" aria-selected="false">Aviation</button><button class="lp-industries__item" role="tab" aria-selected="false">Management Consulting</button><button class="lp-industries__item" role="tab" aria-selected="false">Greenfield</button></div>
        <div style="margin-top:32px"><a class="lp-btn lp-btn--xs lp-btn--tertiary" href="#">20+ more industries</a></div>
      </div>
      <div class="lp-industries__panel" role="tabpanel">
        <div class="lp-slot" style="position:absolute;inset:0;z-index:0;align-items:center">Industry photo 896 × 496</div>
        <div><h3 class="lp-industries__title">Energy</h3><div class="lp-tags"><span class="lp-tag">Oil &amp; Gas</span><span class="lp-tag">Nuclear</span><span class="lp-tag">Grid Infrastructure</span></div></div>
        <div class="lp-industries__foot"><div class="lp-industries__stat"><span>GCC industry value</span><b>$45bn</b></div><div style="display:flex;gap:16px"><a class="lp-btn lp-btn--sm lp-btn--secondary" href="#">Industry report</a><a class="lp-btn lp-btn--sm lp-btn--tertiary" href="#">Case study</a></div></div>
      </div>
    </div>
  </div>
</section>
```

## Script

```html
<script>
document.querySelectorAll('.lp-industries__list').forEach(function(l){l.addEventListener('click',function(e){var t=e.target.closest('[role=tab]');if(!t)return;l.querySelectorAll('[role=tab]').forEach(function(x){x.setAttribute('aria-selected',x===t)});var p=l.closest('.lp-industries').querySelector('.lp-industries__title');if(p)p.textContent=t.textContent})});
</script>
```
