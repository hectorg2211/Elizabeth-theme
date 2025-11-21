# Motion.js Setup Guide

Motion.js (formerly Framer Motion JS) is now integrated into your Shopify theme!

## How It Works

Motion.js is loaded via CDN in the theme layout and is available globally via `window.Motion`.

## Usage Examples

### 1. Basic Animation on Page Load

```javascript
const { animate } = window.Motion

animate(
  '.my-element',
  {
    opacity: [0, 1],
    y: [20, 0],
  },
  {
    duration: 0.6,
    ease: 'easeOut',
  }
)
```

### 2. Scroll-Triggered Animations

Add `data-animate` attribute to any element:

```liquid
<div data-animate="fade-up">
  Content that fades up when scrolled into view
</div>
```

Available animation types:

- `fade-up` - Fades in and moves up
- `fade-in` - Simple fade in
- `scale` - Scales from 0.8 to 1

### 3. Hover Animations

Add `data-hover-animate` attribute:

```liquid
<div data-hover-animate>
  Hover over me!
</div>
```

### 4. Parallax Effects

Add `data-parallax` attribute:

```liquid
<div data-parallax>
  This element moves as you scroll
</div>
```

### 5. Stagger Animations

Animate multiple elements with a delay:

```javascript
const { animate, stagger } = window.Motion

animate('.list-item', { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.1) })
```

### 6. Spring Animations

For natural, bouncy animations:

```javascript
animate('.element', { scale: 1.2 }, { type: 'spring', stiffness: 300 })
```

### 7. Scroll-Linked Animations

Link values to scroll position:

```javascript
const { scroll, animate } = window.Motion

scroll(
  animate('.element', {
    opacity: [0, 1],
    y: [100, 0],
  }),
  {
    target: '.element',
    offset: ['start end', 'end start'],
  }
)
```

## Available Functions

- `animate()` - Animate elements or values
- `scroll()` - Create scroll-linked animations
- `inView()` - Trigger animations when elements enter viewport
- `stagger()` - Create staggered delays
- `spring()` - Spring physics animations
- `motionValue()` - Create reactive motion values

## Documentation

Full documentation: https://motion.dev/docs

## Performance Tips

1. Motion automatically uses hardware acceleration for transform, opacity, and filter properties
2. Use `will-change` CSS property for elements that will animate frequently
3. Prefer transform and opacity over layout properties (width, height, top, left)
