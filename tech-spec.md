# GoLoans Canada - Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | `^6.0` | Build tool and dev server |
| `@tailwindcss/vite` | `^4.0` | Tailwind CSS Vite plugin |
| `tailwindcss` | `^4.0` | Utility-first CSS framework |
| `lucide-react` | `^0.460` | Icon library (all icons as React components) |
| `react` | `^19.0` | UI framework |
| `react-dom` | `^19.0` | React DOM renderer |
| `react-router-dom` | `^7.0` | Client-side routing (Home + Blogs pages) |
| `gsap` | `^3.12` | Animation engine + ScrollTrigger plugin |
| `@fontsource/inter` | `^5.0` | Self-hosted Inter font |

**Dev Dependencies:**

| Package | Version | Purpose |
|---------|---------|---------|
| `@types/react` | `^19.0` | TypeScript definitions |
| `@types/react-dom` | `^19.0` | TypeScript definitions |
| `typescript` | `^5.6` | Type checking |
| `@vitejs/plugin-react` | `^4.0` | React Fast Refresh for Vite |

---

## Component Inventory

### Layout (shared across pages)

| Component | Source | Notes |
|-----------|--------|-------|
| `Header` | Custom | Sticky navbar with scroll shadow. Mobile: hamburger + slide-in menu |
| `Footer` | Custom | Dark navy footer with disclaimer, links, social |
| `Layout` | Custom | Wraps Header + Footer around page content, provides router outlet |

### Sections — Home Page

| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Two-column: loan cards/badges left, circular portrait right |
| `StepsSection` | Custom | 3 numbered step cards in horizontal row |
| `PartnersSection` | Custom | Video showcase card + "Shops Around" feature block with carousel |
| `SecuritySection` | Custom | Shield block + 3 feature icons + province card |
| `TestimonialsSection` | Custom | 3 testimonial cards + "View More" |
| `FAQSection` | Custom | 3-item accordion + "View all FAQs" |
| `CTABannerSection` | Custom | Green banner card with heading + orange CTA |

### Sections — Blogs Page

| Component | Source | Notes |
|-----------|--------|-------|
| `BlogsHeroSection` | Custom | Page title block, centered |
| `BlogGridSection` | Custom | 3-col grid of blog post cards |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| `LoanProductCard` | Custom | HeroSection (3 instances) |
| `StepCard` | Custom | StepsSection (3 instances) |
| `FeatureCard` | Custom | PartnersSection (2 instances), SecuritySection (3 instances) |
| `TestimonialCard` | Custom | TestimonialsSection (3 instances) |
| `Accordion` | Custom | FAQSection |
| `AccordionItem` | Custom | Accordion (3 instances) |
| `InfoPill` | Custom | PartnersSection (4 instances) |
| `CarouselNav` | Custom | PartnersSection |
| `StarRating` | Custom | TestimonialCard |
| `ProvinceCard` | Custom | SecuritySection (6 instances) |
| `BlogPostCard` | Custom | BlogGridSection (6 instances) |
| `SectionHeader` | Custom | Nearly all sections — green label + heading + optional subheading + optional centering |
| `ScrollReveal` | Custom | Wrapper component applying GSAP scroll-triggered entrance animation to any children |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Scroll-triggered reveal (all sections) | GSAP + ScrollTrigger | `ScrollReveal` wrapper component: sets `opacity:0, y:40` initial state, ScrollTrigger at threshold 0.15, animates to `opacity:1, y:0` over 700ms with custom easing. Stagger handled via `stagger` param. | Low |
| Hero entrance sequence | GSAP + ScrollTrigger | Dedicated timeline in HeroSection: label + heading stagger 150ms, loan cards stagger 100ms each, trust badges fade as group, portrait scales from 0.95→1.0 | Medium |
| Security section sequence | GSAP + ScrollTrigger | Timeline: heading fade → shield scale 0.8→1.0 → description slide from right → 3 features stagger 100ms → province card slide-up → province cards stagger 80ms | Medium |
| CTA banner entrance | GSAP + ScrollTrigger | Banner fades in + slides up, left content and right button stagger 200ms | Low |
| Sticky header shadow | CSS + scroll listener | `useScrollPosition` hook toggles a class when scrollY > hero height. CSS handles shadow transition | Low |
| Mobile menu slide | CSS | `translateX(100%)` ↔ `translateX(0)`, 300ms ease. Backdrop fades in/out. Body scroll locked | Low |
| Button hover effects | CSS | `transform` + `box-shadow` transitions, 300ms cubic-bezier | Low |
| Card hover effects | CSS | `transform` + `box-shadow` transitions, 300ms ease | Low |
| Accordion expand/collapse | CSS | `max-height` transition 300ms ease. Chevron `rotate(180deg)` 300ms | Low |
| Carousel scroll | CSS | Smooth scroll with `scroll-behavior: smooth`, JS calculates scroll amount per item | Low |
| Partner lender carousel | JS + CSS | Horizontal scroll container with snap. Arrow buttons scroll one item width. Touch/swipe via CSS `scroll-snap-type` | Low |

---

## State & Logic

This is a marketing website — no global state library needed. All state is local to components.

### useScrollPosition Hook

Extracted into a custom hook. Returns current scroll Y position. Used by:
- **Header**: to toggle sticky shadow class
- **ScrollReveal components**: could use for early-exit, but ScrollTrigger handles this natively

Implementation: `useEffect` with scroll listener, `useState` for position, `useCallback` for handler, cleanup on unmount. Throttle with `requestAnimationFrame`.

### useInView Hook

Lightweight wrapper around IntersectionObserver for simple boolean in-view tracking. Returns a ref and boolean. Used by any component that needs a simple visibility check (e.g., accordion auto-close when scrolled away — though this is optional).

### Mobile Menu State

- `isMenuOpen: boolean` in Header component
- When open: body `overflow: hidden`, backdrop visible, menu `translateX(0)`
- Close on: backdrop click, nav link click, Escape key
- Focus trap: first/last focusable element cycling

### Accordion State

- `openIndex: number | null` in Accordion component
- Only one item open at a time
- Clicking open item closes it (sets `null`)
- Chevron rotation derived from `openIndex === itemIndex`

### Carousel Scroll Logic

- `useRef` for scroll container
- Arrow click handler: `container.scrollLeft += itemWidth` (prev subtracts)
- Disabled state derived from `scrollLeft <= 0` (prev) and `scrollLeft + clientWidth >= scrollWidth` (next)
- No React state needed for scroll position — read from DOM ref on click

---

## Other Key Decisions

### Routing

Two routes via React Router (memory router):
- `/` — Home page (all 7 sections)
- `/blogs` — Blogs page (BlogsHero + BlogGrid)

Nav links (Blogs, FAQs) use `Link` component. FAQ link scrolls to `#faq` section on home page. If on Blogs page, FAQ link navigates to `/#faq`.

### Font Loading

Use `@fontsource/inter` for self-hosted Inter font files. Import weights 400, 600, 700 in main entry point. No Google Fonts CDN — eliminates external dependency and FOUT issues.

### No shadcn/ui

The design uses a fully custom visual language (green/orange palette, specific card styles, pill buttons). Installing shadcn would add unused primitives. All components are simpler to build custom than to override shadcn defaults.

### Image Strategy

- Portrait images (hero-person, partners-person): generate as assets
- Blog thumbnails (6): generate as assets
- Shield icon: Lucide `ShieldCheck` at 120px — no asset needed
- Province map: CSS/SVG outline or omitted (wireframe shows subtle decorative element)
- Logo: CSS/SVG or inline SVG component
- Avatars ("TJ"): pure CSS (green circle + white text)

### ScrollReveal Component Pattern

A reusable wrapper to avoid repeating GSAP ScrollTrigger boilerplate across every section:

```
<ScrollReveal stagger={0.1}>
  <child1 />
  <child2 />
  <child3 />
</ScrollReveal>
```

Children are query-selected inside the wrapper, initial state set via ref, animation triggered by ScrollTrigger. `stagger` prop controls delay between children. GSAP context + cleanup on unmount.
