Image on one side, title, sub-heading, paragraph and button on the other.

**Figma source:** T03C-E GRO/PRO › Image_and_Text (3290:163401)

## Rules

- Two equal columns (`.lp-split--even`), image 24px radius. Swap the column order in the markup to alternate sides down a page.
- Title 48/58 with highlights, optional sub-heading (Montserrat SemiBold 20/30, `text-secondary`), paragraph, one small primary button.
- In RTL the image and text swap sides automatically.

## Markup

```html
<section class="lp-section">
  <span class="lp-glow lp-glow--soft" style="inset-inline-end:-300px;top:-162px;width:1030px;height:891px;opacity:.1"></span>
  <div class="lp-container"><div class="lp-split lp-split--even">
    <div class="lp-media" style="aspect-ratio:558/506"><div class="lp-slot" style="height:100%">Image 558 × 506</div></div>
    <div><h2 class="lp-title">In <span class="lp-hl">Saudi Arabia</span> This Service is called <span class="lp-hl">GRO</span></h2><p class="lp-case__sub">GRO services in Saudi Arabia</p><p class="lp-lead">The service is the same one. The term is not. In Saudi Arabia the role is a Government Relations Officer, and the work runs through a different set of platforms: Qiwa for labour contracts and establishment files, Muqeem for iqama and exit re-entry, Absher for individual government services.</p><div class="lp-actions"><a class="lp-btn lp-btn--sm" href="#">View GRO services in Saudi Arabia</a></div></div>
  </div></div>
</section>
```
