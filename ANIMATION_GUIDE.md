# Smooth Scroll Animations & Entrance Effects Guide

This portfolio now includes modern entrance animations and scroll-triggered effects. Use these classes to create engaging visual experiences as elements enter the viewport.

## Quick Start

### 1. **Scroll-Triggered Animations** (Recommended for most elements)

These animations trigger when elements scroll into view:

```html
<!-- Simple fade-up on scroll -->
<div class="scroll-trigger">Your content fades up on scroll</div>

<!-- Multiple items with stagger -->
<div class="scroll-trigger-stagger">Item 1</div>
<div class="scroll-trigger-stagger">Item 2</div>
```

**How it works:**
- Elements start invisible and positioned below
- When they scroll into viewport, they fade in and slide up smoothly
- `.scroll-trigger-stagger` adds sequential delays for cascading effect

---

## Entrance Effect Classes

Apply these to elements that load immediately (homepage hero, etc.):

### Scale-In Effect
```html
<div class="entrance-scale">
  <h1>Welcome!</h1>
</div>
```
Scales element from 90% to 100% with smooth fade.

### Slide-In From Left
```html
<div class="entrance-left">
  <p>Sliding in from the left...</p>
</div>
```
Slides element from left with slight rotation.

### Slide-In From Right
```html
<div class="entrance-right">
  <p>Sliding in from the right...</p>
</div>
```
Slides element from right with slight rotation.

### Fade & Scale
```html
<div class="entrance-fadeScale">
  <img src="profile.jpg" alt="Profile">
</div>
```
Combined fade and scale effect with smooth easing.

### Reveal Text Effect
```html
<div class="entrance-reveal">
  <h2>Revealing Title</h2>
</div>
```
Text appears to be revealed from left to right.

### Parallax-Up Effect
```html
<div class="entrance-parallax">
  <p>Parallax entrance effect</p>
</div>
```
Smooth parallax-style upward entrance.

---

## Staggered Animations

For parent containers with multiple children:

```html
<div class="animate-stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Each child automatically gets sequential animation delays (0.1s, 0.2s, 0.3s, etc.).

---

## Advanced: Combining Effects

### Scroll-Triggered Stagger (Recommended for grids)
```html
<div class="grid grid-cols-3 gap-8">
  <article class="card scroll-trigger-stagger">
    <h3>Card 1</h3>
  </article>
  <article class="card scroll-trigger-stagger">
    <h3>Card 2</h3>
  </article>
  <article class="card scroll-trigger-stagger">
    <h3>Card 3</h3>
  </article>
</div>
```

Each card fades in and slides up with automatic stagger delays when they enter viewport.

### Shimmer Loading Effect
```html
<div class="shimmer-pulse">
  Loading content...
</div>
```
Adds a smooth shimmer animation for loading states.

---

## CSS Classes Reference

| Class | Effect | Trigger |
|-------|--------|---------|
| `.scroll-trigger` | Fade up on scroll | Scroll into view |
| `.scroll-trigger-stagger` | Staggered fade up | Scroll into view |
| `.entrance-scale` | Scale from center | Immediate (page load) |
| `.entrance-left` | Slide from left | Immediate |
| `.entrance-right` | Slide from right | Immediate |
| `.entrance-fadeScale` | Fade + scale combo | Immediate |
| `.entrance-reveal` | Text reveal | Immediate |
| `.entrance-parallax` | Parallax entrance | Immediate |
| `.animate-stagger` | Stagger children | Immediate |
| `.shimmer-pulse` | Shimmer effect | Continuous |

---

## Customizing Animations

### Adjust timing in CSS (styles.css):

```css
/* Make animations faster */
.scroll-trigger {
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

/* Make entrance animations longer */
.entrance-scale {
  animation: scaleInCenter 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

### Modify entrance animation delays:

```css
.entrance-left {
  animation-delay: 0.2s;
}
```

---

## Best Practices

1. **Use scroll-trigger for below-fold content** (sections, grids, cards that appear during scrolling)
2. **Use entrance-* classes for hero section** (immediate animations on page load)
3. **Use scroll-trigger-stagger for grids/lists** (automatic cascading effect)
4. **Avoid stacking too many animations** (can cause performance issues)
5. **Test on mobile** (reduce animation complexity for smaller screens if needed)

---

## Performance Tips

- Animations use CSS `transform` and `opacity` for smooth 60fps performance
- Intersection Observer detects viewport entry (efficient, no scroll event spam)
- Use `will-change` sparingly for heavy animations:
  ```css
  .scroll-trigger {
    will-change: opacity, transform;
  }
  ```

---

## Examples in Action

### Hero Section (Immediate)
```html
<section id="home" class="min-h-screen flex items-center">
  <div class="container">
    <div class="entrance-left">
      <h1>Welcome</h1>
      <p>Your content here</p>
    </div>
  </div>
</section>
```

### Projects Grid (Scroll-Triggered with Stagger)
```html
<section id="projects" class="py-20">
  <div class="grid grid-cols-3 gap-8">
    <article class="card scroll-trigger-stagger">
      <h3>Project 1</h3>
    </article>
    <article class="card scroll-trigger-stagger">
      <h3>Project 2</h3>
    </article>
    <article class="card scroll-trigger-stagger">
      <h3>Project 3</h3>
    </article>
  </div>
</section>
```

### About Section (Scroll-Triggered)
```html
<section id="about" class="py-20">
  <div class="scroll-trigger">
    <h2>About Me</h2>
    <p>Your about content...</p>
  </div>
</section>
```

---

## Troubleshooting

**Q: Animations not showing?**
- Ensure element has `.scroll-trigger` or `.entrance-*` class
- Check browser console for errors
- Verify CSS loaded correctly

**Q: Animation too fast/slow?**
- Modify duration in CSS (default is 0.6s-0.8s)
- Adjust `transition` or `animation` properties

**Q: Performance issues on mobile?**
- Reduce number of staggered items
- Disable animations for small screens:
  ```css
  @media (max-width: 768px) {
    .scroll-trigger { animation: none; }
  }
  ```

---

Happy animating! 🚀
