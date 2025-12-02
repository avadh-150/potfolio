# Quick Reference: Animation Classes

## Core Classes

```
.reveal-element    → Fade + Slide Up (default, 0.8s)
.reveal-left       → Slide from Left (0.8s)
.reveal-right      → Slide from Right (0.8s)
.reveal-scale      → Scale Up (0.8s, 85%→100%)
.reveal-fade       → Fade Only (0.8s)
.reveal-quick      → Fast Entry (0.4s)
.parallax-element  → Parallax + Scale (0.9s)
```

## Special Classes

```
.reveal-stagger    → Auto-stagger children (up to 10)
.lazy-image        → Lazy load with fade (+ data-src)
data-parallax      → Parallax scroll effect
```

## Quick HTML Examples

```html
<!-- Basic fade-in on scroll -->
<section class="reveal-element">Content</section>

<!-- Staggered grid -->
<div class="reveal-stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Lazy load image -->
<img class="lazy-image" data-src="img.jpg" alt="..." />

<!-- Parallax hero -->
<div class="parallax-element" data-parallax="true">
  <h1>Hero Title</h1>
</div>

<!-- Two-column layout -->
<div class="grid grid-cols-2">
  <div class="reveal-left">Left content</div>
  <div class="reveal-right">Right content</div>
</div>
```

## Configuration

```javascript
new ScrollAnimationManager({
  rootMargin: '0px 0px -50px 0px',  // When to trigger
  threshold: 0.1,                    // % visible to trigger
  parallaxStrength: 0.5              // Parallax intensity (0-1)
});
```

## CSS Variables (Easing)

```css
:root {
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Customize Timing

```css
/* Global speed adjustment */
.reveal-element {
  transition: opacity 0.5s var(--ease-out-cubic),
              transform 0.5s var(--ease-out-cubic);
}

/* Faster reveal */
.reveal-quick {
  transition: opacity 0.3s, transform 0.3s;
}

/* Slower reveal */
.reveal-element {
  transition: opacity 1.2s, transform 1.2s;
}
```

## Mobile Optimization

```css
@media (max-width: 768px) {
  /* Faster on mobile */
  .reveal-element {
    transition: opacity 0.4s, transform 0.4s;
  }

  /* Disable parallax on mobile */
  [data-parallax] {
    transform: none !important;
  }
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Not animating | Add correct class name, check if element in viewport |
| Too fast/slow | Modify `transition` duration in CSS |
| Janky/stuttering | Use only `transform` and `opacity`, lower parallax |
| Images not loading | Use `data-src`, not `src` attribute |
| Too much motion | Reduce parallax strength or disable |

---

See `SCROLL_ANIMATIONS_GUIDE.md` for complete documentation.
