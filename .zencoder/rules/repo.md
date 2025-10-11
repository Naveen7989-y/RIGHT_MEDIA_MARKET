# Repository Reference

## Overview
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: react-router-dom
- **Icons**: react-icons

## Key Paths
1. **Entry Point**: `src/main.jsx`
2. **Root Component**: `src/App.jsx`
3. **Shared Styles**: `src/index.css`
4. **Pages**:
   - `src/pages/Home.jsx`
   - `src/pages/Services.jsx`
   - `src/pages/Contact.jsx`
5. **Layout Components**:
   - `src/components/Navbar.jsx`
   - `src/components/Footer.jsx`
   - `src/components/ScrollToTop.jsx`
   - `src/components/AnimatedHero.jsx`
6. **Static Assets**: `src/images`

## Tailwind Setup
- Tailwind configuration: `tailwind.config.js`
- Custom color palette defined under `theme.extend.colors`
- Common utility classes defined in `src/index.css`

## Development
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Notes
- Animations leverage Tailwind utilities and custom keyframes in `tailwind.config.js`
- Gradients use `primary` and `secondary` palettes
- Smooth scrolling enabled globally via `html { scroll-behavior: smooth; }`

## Update Tips
- When introducing new colors, extend Tailwind themes to keep utility classes available
- Prefer component-level state and hooks for interactivity
- Reuse `container-custom`, `section-padding`, and `card` utilities for layout consistency