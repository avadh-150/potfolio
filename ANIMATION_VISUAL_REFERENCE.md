# Animation Classes Visual Reference

A quick visual guide to understand each animation class and when to use it.

---

## 📊 Animation Classes Chart

```
┌─────────────────────────────────────────────────────────────────┐
│              ANIMATION CLASSES - VISUAL REFERENCE                │
└─────────────────────────────────────────────────────────────────┘

1. .reveal-element (DEFAULT)
   ┌─────────────────────────────┐
   │  ↑                          │  Fades in + Slides up
   │  │ OPACITY: 0 → 1           │  
   │  │ TRANSFORM: Y(60px) → 0   │  Duration: 0.8s
   │  └────────────────────────┘  Perfect for: Sections, content blocks
   
2. .reveal-left
   ├────────────────────────────  Slides from left
   │ ← [Element]                 │  
   │   TRANSFORM: X(-80px) → 0   │  Duration: 0.8s
   └────────────────────────────  Perfect for: Text, left column

3. .reveal-right
   ────────────────────────────┤  Slides from right
                    [Element] →│  
                   TRANSFORM: X(80px) → 0  Duration: 0.8s
   ────────────────────────────┤  Perfect for: Images, right column

4. .reveal-scale
   ↗                    ↗       
    ╲                  ╱        Scales from 85% to 100%
     └─[Element]───┘           TRANSFORM: scale(0.85) → 1
       ↙                    ↙   Duration: 0.8s
                               Perfect for: Cards, emphasis

5. .reveal-fade
   [Element] ⚪ → ⚫            Opacity fade only
   Fades from 0 to 1            No movement
   Duration: 0.8s              Perfect for: Text, subtle elements

6. .reveal-quick
   ↑                           Fast entrance
   │ [Element]                 TRANSFORM: Y(20px) → 0
   └─────                      Duration: 0.4s (faster)
                               Perfect for: Buttons, CTAs

7. .parallax-element
   ↑ ╱────────┐                Parallax + Scale
   │ │Element ├─ Moves up      TRANSFORM: Y(100px)+scale(0.95)
   └─╲────────┘                Duration: 0.9s
                               Perfect for: Hero text, depth

8. .reveal-stagger
   ┌─ Item 1     (0.1s delay) ┐  Cascading effect
   ├─ Item 2     (0.2s delay) ┤  Each item animates sequentially
   ├─ Item 3     (0.3s delay) ├─ Supports up to 10 children
   ├─ Item 4     (0.4s delay) │
   └─ Item 5     (0.5s delay) ┘  Perfect for: Grids, lists
```

---

## 🎯 Quick Class Selection Guide

```
CHOOSING THE RIGHT ANIMATION:

What's the element?
│
├─ TEXT/DESCRIPTION
│  └─→ Use .reveal-element (fade + slide up)
│      Or .reveal-left/.reveal-right for columns
│
├─ CARD/BOX
│  └─→ Use .reveal-scale (elegant entrance)
│      Or .reveal-element for basic reveal
│
├─ BUTTON/CTA
│  └─→ Use .reveal-quick (fast, attention grabbing)
│
├─ IMAGE
│  └─→ Use .reveal-right or .reveal-left
│      Plus .lazy-image for lazy loading
│
├─ GRID/LIST (Multiple items)
│  └─→ Use .reveal-stagger (cascading animation)
│      Wrap items, not individual items
│
├─ HERO TITLE
│  └─→ Use .parallax-element (with data-parallax)
│      Plus optional .reveal-left
│
├─ BACKGROUND ELEMENT
│  └─→ Use .reveal-fade (subtle, no distraction)
│
└─ EMPHASIS/HIGHLIGHT
   └─→ Use .reveal-scale (stands out)
```

---

## 📋 Implementation Patterns

### **Pattern 1: Two-Column Layout**
```
┌─────────────────────────┐
│ .reveal-left     │       │
│ [Text Content]   │       │
│ - Point 1        │       │
│ - Point 2        │       │
│ - Point 3        │ .reveal-right
│                  │ [Image]
│                  │
└─────────────────────────┘
```

**HTML:**
```html
<div class="grid grid-cols-2">
  <div class="reveal-left">Text content</div>
  <div class="reveal-right"><img src="..." /></div>
</div>
```

---

### **Pattern 2: Staggered Grid**
```
┌─────────────────────────┐
│ .reveal-stagger         │
│  ├─ .reveal-scale       │
│  │  [Card 1]            │
│  │  (0.1s delay)        │
│  ├─ .reveal-scale       │
│  │  [Card 2]            │
│  │  (0.2s delay)        │
│  └─ .reveal-scale       │
│     [Card 3]            │
│     (0.3s delay)        │
└─────────────────────────┘
```

**HTML:**
```html
<div class="reveal-stagger">
  <article class="card reveal-scale">Card 1</article>
  <article class="card reveal-scale">Card 2</article>
  <article class="card reveal-scale">Card 3</article>
</div>
```

---

### **Pattern 3: Hero Section with Parallax**
```
┌─────────────────────────┐
│ [Background blur]       │
│ .parallax-element       │
│ [Title moves up]        │
│ .reveal-left            │
│ [Description]           │
│                         │
│ .reveal-stagger         │
│  ├─ [Button 1]          │
│  └─ [Button 2]          │
└─────────────────────────┘
```

**HTML:**
```html
<section class="hero">
  <h1 class="parallax-element" data-parallax="true">
    Hero Title
  </h1>
  <p class="reveal-left">Description</p>
  <div class="reveal-stagger">
    <button>Button 1</button>
    <button>Button 2</button>
  </div>
</section>
```

---

## ⏱️ Timing Reference

```
ANIMATION DURATIONS:

.reveal-quick          → 0.4s  (Fast, attention)
.reveal-fade           → 0.8s  (Subtle)
.reveal-element        → 0.8s  (Standard)
.reveal-left/right     → 0.8s  (Standard)
.reveal-scale          → 0.8s  (Elegant)
.parallax-element      → 0.9s  (Smooth parallax)

.reveal-stagger:
├─ Child 1 → 0.7s + 0.1s delay
├─ Child 2 → 0.7s + 0.2s delay
├─ Child 3 → 0.7s + 0.3s delay
└─ ... up to Child 10

Total visible time:
- First item appears at: 0s
- Last item completes at: ~1.3s (0.7s + 0.6s delay)
```

---

## 🎨 Easing Curves

```
DIFFERENT EASING FEEL:

--ease-out-quad
←─ ─ ─ ─ ─ ─ ─ ─ ┐  Snappy, quick deceleration
                   └─ Almost instant

--ease-out-cubic (DEFAULT)
←─ ─ ─ ─ ─ ┐        Smooth, professional
           └─ ─ ─  Gradual slowdown

--ease-out-expo
←───────────────┐   Bouncy, playful
                └─  Dramatic slowdown

--ease-smooth
←───────────┐      Even, balanced
            └────  Consistent pace

Each curve has different personality:
- Quad: Fresh, quick, modern
- Cubic: Professional, standard (DEFAULT)
- Expo: Playful, premium feel
- Smooth: Balanced, neutral
```

---

## 🔄 Animation State Diagram

```
Element Lifecycle:

1. Initial State (off-screen)
   └─ opacity: 0
   └─ transform: translateY(60px)
   └─ will-change: opacity, transform

2. Element scrolls into viewport
   └─ IntersectionObserver detects
   └─ Adds .revealed class

3. Transition Begins (via CSS)
   └─ opacity: 0 → 1
   └─ transform: translateY(60px) → 0
   └─ Duration: 0.8s
   └─ Easing: cubic-bezier(0.16, 1, 0.3, 1)

4. Animation Complete
   └─ opacity: 1
   └─ transform: translateY(0)
   └─ will-change: auto (removed for optimization)

5. Final State (on-screen, visible)
   └─ Element fully visible and interactive
```

---

## 🎭 Animation Combinations

```
RECOMMENDED COMBINATIONS:

Hero Section:
  .reveal-left + .parallax-element
  .reveal-element + .reveal-stagger
  
Two-Column Layout:
  .reveal-left + .reveal-right
  
Grid of Items:
  .reveal-stagger + .reveal-scale
  
Feature Section:
  .reveal-element + .reveal-stagger
  
Image Gallery:
  .lazy-image + .reveal-scale
  
Contact Form:
  .reveal-element + .reveal-stagger

Button Group:
  .reveal-stagger + .reveal-quick (children)
```

---

## 📏 Responsive Adjustments

```
BREAKPOINT TIMING ADJUSTMENTS:

Desktop (1024px+)
│ Standard timings
│ .reveal-element → 0.8s
│ parallaxStrength → 0.5

Tablet (768px - 1023px)
│ Slightly faster
│ .reveal-element → 0.6s
│ parallaxStrength → 0.3

Mobile (< 768px)
│ Much faster
│ .reveal-element → 0.4s
│ parallaxStrength → 0 (disabled)

Very Small (< 480px)
│ Minimal animation
│ .reveal-element → 0.3s
│ .reveal-stagger delay → 0 (no cascade)
```

---

## ✅ Checklist: Applying Animations

- [ ] Identify each section type (hero, grid, columns, etc.)
- [ ] Choose appropriate animation class(es)
- [ ] Apply to HTML elements
- [ ] Test scroll behavior
- [ ] Verify timing looks good
- [ ] Check mobile responsiveness
- [ ] Profile with DevTools
- [ ] Confirm performance (60 FPS)
- [ ] Test accessibility (prefers-reduced-motion)
- [ ] Cross-browser testing

---

## 🎬 Animation Preview

**Static text representation of smooth animations:**

```
.reveal-element animation:
Frame 0%   Frame 25%  Frame 50%  Frame 75%  Frame 100%
 ◯  ┊       ◯         ◉          ◉●         ◉●●
 ⬇  ┊       ⬆         ⬆⬆         ⬆⬆⬆        ▬▬▬
 
Opacity:  0 → 0.25 → 0.5 → 0.75 → 1.0
Y-pos:    60px → 45px → 30px → 15px → 0px

Result: Smooth fade-in + upward movement
```

---

## 📞 Quick Decision Tree

```
START
  │
  ├─ Is it text? ────────→ reveal-element (fade-up)
  │                       or reveal-left/right (slide)
  │
  ├─ Is it a card? ───────→ reveal-scale (elegant)
  │
  ├─ Is it an image? ────→ reveal-left/right (slide)
  │                       + lazy-image (lazy load)
  │
  ├─ Is it multiple
  │  items in grid? ──────→ reveal-stagger (cascade)
  │                       + reveal-scale (children)
  │
  ├─ Is it a button? ────→ reveal-quick (fast)
  │
  ├─ Is it hero text? ───→ parallax-element
  │                       + reveal-left
  │
  └─ Is it subtle? ──────→ reveal-fade (no movement)
                           
DONE! Apply class and test.
```

---

Use this visual reference while implementing animations in your portfolio! 🎨
