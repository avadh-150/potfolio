# AI Agent Instructions for Portfolio Website

## Project Overview
This is a personal portfolio website built with HTML, TailwindCSS, and vanilla JavaScript. The site features a cybersecurity/hacker theme with matrix-style animations and interactive elements.

## Key Components & Architecture

### Visual Effects
- Matrix rain animation (`matrix.js`) - Core background effect
- Particle system (`script.js`) - Secondary interactive background
- Custom cursor animations and floating shapes
- Typewriter effects and cyber-style popups

### Core Features
1. Responsive navigation with smooth scrolling
2. Dynamic typing animation for role descriptions
3. Rotating cyber quotes/facts
4. Contact form with custom animations and sound effects
5. Terminal-style form inputs
6. Custom scrolling timeline for experience section

## Important Files
- `main.html` - Main structure and content
- `styles.css` - Custom styling and animations
- `matrix.js` - Matrix rain background implementation
- `script.js` - Core functionality and interactions

## Key Patterns & Conventions

### CSS
- Custom variables for hacker theme colors in `:root`
- Consistent animation naming (`animate-*` classes)
- Card styling with `card-hover` class pattern
- Responsive design breakpoints using Tailwind defaults

### JavaScript
- IIFE pattern for scoped functionality
- Event-driven animation triggers
- Sound effect system for interactions
- DOM manipulation with consistent ID patterns

### Interactive Elements
- Terminal-style form inputs use `.terminal-form` class
- Glowing effects use `glow` animation
- Hover states consistently use transform scale
- Card interactions use backdrop-filter blur effects

## Common Development Tasks

### Adding New Sections
1. Follow existing section structure in `main.html`
2. Use `section-bg` class for alternating backgrounds
3. Include responsive container classes
4. Add smooth scroll ID to navigation

### Styling New Components
1. Prefer Tailwind classes for standard styles
2. Add custom styles to `styles.css` for animations
3. Use existing color variables from `:root`
4. Follow card-hover pattern for interactive elements

### Implementing Animations
1. Choose from existing animation classes or add new ones in `styles.css`
2. Use `animate-*` class naming convention
3. Consider animation delays for staggered effects
4. Maintain consistent timing functions

### Form Handling
1. Add new inputs to `contact-form` section
2. Use terminal-form styling pattern
3. Include validation attributes
4. Update form submission handler in `script.js`

## Best Practices
1. Maintain cybersecurity theme in new features
2. Keep matrix rain as primary background
3. Use green color scheme from CSS variables
4. Follow terminal/hacker aesthetic for new UI elements
5. Ensure smooth animations on all interactions

## Performance Considerations
- Matrix animation is performance-intensive; avoid additional heavy animations
- Use `transform` and `opacity` for smooth transitions
- Implement lazy loading for images
- Consider mobile performance in animations

## Common Issues & Solutions
- Matrix rain may cause performance issues on mobile: adjust density
- Contact form needs proper CORS setup for formspree.io
- Smooth scroll polyfill may be needed for older browsers
- Particle system should be disabled on low-power devices