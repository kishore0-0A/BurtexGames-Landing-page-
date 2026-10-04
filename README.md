# Burtex Games Landing Page

A cinematic, responsive landing page for **Burtex Games Chennai** — an indoor entertainment destination for bowling, arcade games, VR, celebrations, food, and group experiences.

The site is designed to create an energetic first impression, explain the venue experience clearly, and guide visitors toward contacting the venue or planning a visit.

## Preview

The project runs as a single-page experience with:

- A cinematic hero section with parallax movement
- Animated scroll progress and marquee content
- Experience cards for Bowl, Play, and Celebrate
- Atmosphere gallery with hover zoom interactions
- A “Make a Night of It” visitor journey
- Food and drinks spotlight
- Venue statistics and social proof
- FAQ-style visitor information
- Location, opening hours, phone, and email CTAs
- Responsive layouts for desktop, tablet, and mobile

## Technology

- React 19
- TypeScript
- Vite
- React Router
- Framer Motion
- Tailwind CSS v4
- CSS custom properties and responsive CSS
- Oxfmt

## Getting started

### Requirements

- Node.js
- npm or pnpm

### Install dependencies

```bash
npm install
```

Or, if you use pnpm:

```bash
pnpm install
```

### Start the development server

```bash
npm run dev
```

The Vite server will start on the configured local port. Figma Make projects commonly expose the app through port `8443`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Format the project

```bash
npm run format
```

## Project structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   ├── PageTransition.tsx
│   │   └── Root.tsx
│   ├── pages
│   │   └── HomePage.tsx
│   └── routes.tsx
└── .figma
    └── make
        ├── site.json
        ├── dev
        ├── deploy
        ├── deploy-preview
        ├── install
        ├── format
        ├── langserver
        └── analyze-routes
```

## Main application files

### `src/pages/HomePage.tsx`

Contains the complete Burtex Games landing-page content:

- Hero messaging and primary CTAs
- Experience sections
- Atmosphere gallery
- Visitor journey
- Food and drinks information
- Testimonials
- FAQ content
- Final visit CTA

### `src/index.css`

Contains the visual system for the landing page:

- Dark cinematic color palette
- Typography and display styles
- Responsive breakpoints
- Hero gradients and overlays
- Parallax-friendly layout layers
- Marquee animation
- Glow and reveal animations
- Card hover effects
- Mobile layout adjustments
- Reduced-motion support

### `src/components/Nav.tsx`

Provides the fixed navigation bar with anchor links to:

- Experiences
- Why us
- Visit

### `src/components/Footer.tsx`

Provides footer navigation, contact details, location information, and opening hours.

### `src/routes.tsx`

Defines the application routes. The primary experience is the landing page at:

```text
/
```

## Visual and interaction design

The landing page uses a cinematic editorial style:

- Full-bleed photography with dark overlays
- Bold condensed display typography
- Electric blue accent color
- Parallax hero imagery
- Scroll-triggered Framer Motion reveals
- Animated marquee strip
- Image zoom transitions
- Fixed scroll progress indicator
- Custom cursor on pointer devices
- Reduced-motion support for accessibility

Images currently use remote Unsplash URLs. For production use, these can be replaced with optimized, locally hosted assets or a CDN-backed image system.

## Brand and contact details

The current placeholder business details are:

- **Brand:** Burtex Games
- **Location:** Thoraipakkam OMR, Chennai – 600097
- **Hours:** Open daily, 11:00 AM – 11:00 PM
- **Phone:** `+91 99999 99999`
- **Email:** `hello@burtexgames.in`

These values are currently represented directly in the landing page components and should be replaced with verified business details before production launch.

## The `.figma` folder

The `.figma` folder contains Figma Make-specific project configuration and helper commands. It is separate from the React application code.

It includes configuration for:

- Development server behavior
- Production builds
- Preview deployments
- Dependency installation
- Formatting
- Language-server support
- Route analysis
- Figma Make site metadata

Keep this folder if the project will continue to be edited, previewed, or deployed through Figma Make. It is not required for a standard Vite workflow using only `npm run dev`, `npm run build`, and `npm run preview`, but removing it may affect Figma Make functionality.

## Deployment

The project can be deployed to any static hosting provider that supports Vite builds.

Build the application:

```bash
npm run build
```

Deploy the generated `dist/` directory to a provider such as:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static web server

For client-side routing, configure the hosting provider to serve `index.html` as a fallback for unknown routes.

## Accessibility and responsive behavior

The page includes:

- Semantic headings and sections
- Descriptive image `alt` text
- Keyboard-friendly links and disclosure panels
- Responsive mobile layouts
- A reduced-motion media-query override
- A cursor effect that disables itself on touch devices

Before launch, verify color contrast, final image alt text, contact information, and keyboard navigation against the production content.

## Validation

Run the production build before publishing:

```bash
npm run build
```

The build should complete successfully and generate the `dist/` directory.

## License

This project is currently an internal Burtex Games landing-page project. Add the appropriate license before distributing the source publicly.
