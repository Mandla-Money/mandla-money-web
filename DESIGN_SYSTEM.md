# Mandla Money Design System

This document captures the current Mandla Money visual language and turns it into a reusable design system for mobile apps, web apps, and internal tools.

It is based on the live site theme (colors, typography, spacing, motion, and component behaviors) and should be treated as the source of truth for future products.

## 1) Brand Foundation

### Brand personality
- Practical and trustworthy
- Inclusive and low-friction
- Premium but simple
- Human-first fintech (technology should feel invisible)

### Product promise in UI terms
- Clear primary actions
- Minimal cognitive load
- Strong readability on low-end devices
- Consistent interactions across channels (web, WhatsApp, SMS, USSD companions, mobile apps)

## 2) Core Design Tokens

## Color tokens

Primary palette (from `globals.css`):
- `--primary`: `#0A0A0A` (near-black)
- `--accent`: `#C9A84C` (gold)
- `--background`: `#FAF8F4` (warm off-white)
- `--off-white`: `#FAF8F4`
- `--surface`: `#FFFFFF`
- `--surface-strong`: `#F0EDE6`
- `--foreground`: `#0A0A0A`
- `--accent-foreground`: `#0A0A0A`

Semantic usage:
- **Primary backgrounds**: `primary`
- **Primary CTA**: `accent` background + `primary` text
- **Page background**: `background` / `off-white`
- **Cards and inputs**: `surface`
- **Subtle blocks/dividers**: `surface-strong` or `primary/10`
- **Main text on light**: `primary`
- **Main text on dark**: `white`
- **Secondary text on light**: `primary/60` to `primary/70`
- **Secondary text on dark**: `white/60` to `white/70`

Accent opacity guidance:
- Highlight surfaces: `accent/10`
- Borders and indicators: `accent/20` to `accent/40`
- Micro-labels and tags: full `accent`

## Typography tokens

Font families:
- **Body/UI**: Inter (`--font-inter`)
- **Display/Headings**: Manrope (`--font-manrope`)

Type hierarchy used across the site:
- Display hero: `text-6xl` to `text-7xl`, bold
- Page hero: `text-4xl` to `text-6xl`, bold
- Section heading: `text-3xl` to `text-5xl`, bold
- Card heading: `text-lg` to `text-2xl`, semibold/bold
- Body large: `text-lg`
- Body default: `text-base`
- Body small/support: `text-sm`
- Micro labels/eyebrows: `text-xs`, uppercase, wide tracking (`0.14em` to `0.18em`)

Text behavior:
- Heading wrap uses balanced wrapping.
- Keep paragraph line length moderate (about 55-80 chars ideal for readability).

## Radius tokens

From theme:
- Base: `8px`
- `md`: `8px`
- `lg`: `12px`
- `xl`: `16px`

Component usage:
- Buttons/inputs: `lg`
- Cards: `xl` to custom rounded values for hero devices
- Pills/chips: full radius

## Shadow and elevation tokens

Soft card shadow (`shadow-soft`):
- Layered subtle shadow for light surfaces

Large soft shadow (`shadow-soft-lg`):
- Elevated feature blocks and hero cards

Use:
- Default cards: soft shadow
- Featured/hovered cards: soft-lg or gold-tinted hover shadow

## Motion tokens

Durations/easing:
- Standard interaction: `220ms`, cubic-bezier `(0.2, 0.8, 0.2, 1)`
- Entry animation: `600ms` ease-out
- Decorative loops: `5s` to `6s`

Motion principles:
- Keep movement subtle and purposeful
- Prefer opacity/translate changes over large scale transforms
- Never rely on animation for comprehension

## 3) Layout System

## Grid and containers
- Max width: `max-w-7xl` for marketing sections
- Reading pages: `max-w-4xl` to `max-w-5xl`
- Horizontal padding: typically `px-6`
- Vertical rhythm: mostly `py-20` and `py-24` for major sections

## Section pattern
- Alternating dark and light sections to maintain visual cadence
- Common pattern:
  1. Eyebrow label
  2. Strong heading
  3. Supporting paragraph
  4. Action(s) or card grid

## 4) Component Guidelines

## Buttons

Primary variants in code:
- `primary`: dark background, white text
- `secondary`/`gold`: accent background, primary text
- `ghost`: transparent with ring
- `light`: transparent on dark with white ring

Behavior:
- Hover lift: slight upward movement
- Gold CTA hover: brightness increase
- Focus-visible ring: accent-based high contrast ring

Mobile rules:
- Minimum tap target: 44x44 px
- Keep critical CTA fixed or easily reachable

## Cards

Card style:
- Background: white or off-white
- Border: `primary/10`
- Radius: 16px+
- Shadow: soft
- Hover: tiny lift + subtle accent border/shadow

Card content order:
1. Icon/image
2. Label/eyebrow
3. Title
4. Description
5. CTA (optional)

## Forms

Input style:
- White background
- `primary/10` border
- Accent focus ring and border on focus
- Rounded-lg corners

Validation:
- Reserve space for helper/error text
- Use color + icon + text (not color only)

## Navigation

Header pattern:
- Sticky translucent dark header
- Gold underline hover treatment for nav links
- Desktop dropdown mega-menus
- Collapsible mobile menu

Deep-link pattern:
- Use anchors + scroll offsets for in-page section navigation

## FAQ accordion

Supports dark and light variants:
- Dark variant for dark backgrounds
- Light variant for light cards/sections

Interaction:
- Plus icon rotates to indicate open state
- Animated expand/collapse

## Floating WhatsApp entry

Desktop:
- Persistent bottom-right QR experience

Mobile:
- Rounded CTA pill button

Purpose:
- Fast conversion path from browsing to onboarding

## 5) Imagery and Media Rules

General:
- Prefer authentic product, partner, and event imagery
- Avoid heavy filters that reduce trust
- Keep logos sharp and non-distorted

Aspect ratio handling:
- Do not force one image ratio for all assets.
- For mixed libraries (landscape/square/portrait), use per-image strategies:
  - Wide banners: inline between text blocks
  - Portrait assets: side rail on desktop, inline on mobile
  - Square assets: balanced side or card placement
- Prefer showing full image (`contain` or intrinsic sizing) over aggressive cropping.

Video:
- Hero video should stay subtle and not block readability
- Always provide gradient overlays for text contrast

## 6) Iconography

Library:
- Lucide icons (clean, line-based)

Usage:
- 16-24 px typical sizes
- Accent for active/highlight icons
- Keep icon meaning literal and familiar (money, shield, message, users, globe)

## 7) Accessibility Standards

Minimum requirements:
- WCAG 2.1 AA contrast targets
- Visible keyboard focus on all controls
- Semantic headings in proper order
- Alt text for informative images
- Decorative images marked appropriately
- Do not convey meaning by color alone

Forms and interactive controls:
- Proper labels for all fields
- Error states announced with text
- Buttons and links have clear accessible names

Motion accessibility:
- Keep animation subtle
- Avoid rapid flashes or large parallax effects

## 8) Cross-Platform Implementation Guidance

## iOS (SwiftUI) mapping
- `primary` -> dark neutral background/text
- `accent` -> primary CTA color
- Use 8pt spacing grid
- Use corner radius tiers: 8, 12, 16
- Match web hierarchy: Display (Manrope), body (Inter)

## Android (Compose) mapping
- Define tokens in `ColorScheme` and `Typography`
- Keep semantic names (`Primary`, `Accent`, `Surface`, `Background`)
- Reuse spacing/radius/elevation rules as design tokens

## React Native / Flutter mapping
- Create a shared token object/package:
  - colors
  - typography
  - spacing
  - radius
  - elevation
  - motion

## Token starter object

```json
{
  "color": {
    "primary": "#0A0A0A",
    "accent": "#C9A84C",
    "background": "#FAF8F4",
    "surface": "#FFFFFF",
    "surfaceStrong": "#F0EDE6",
    "foreground": "#0A0A0A"
  },
  "font": {
    "body": "Inter",
    "display": "Manrope"
  },
  "radius": {
    "md": 8,
    "lg": 12,
    "xl": 16
  },
  "motion": {
    "fastMs": 220,
    "enterMs": 600,
    "easingStandard": [0.2, 0.8, 0.2, 1]
  }
}
```

## 9) Content Tone and Voice

Voice:
- Clear, direct, and confident
- Inclusive language
- Avoid jargon where possible

Messaging style:
- Benefit-first headlines
- Short supporting sentences
- Concrete outcomes ("send instantly", "no smartphone required")

## 10) Governance

When extending this system:
1. Add semantic tokens before adding one-off styles.
2. Reuse existing component variants before creating new ones.
3. Test on mobile first, then desktop.
4. Verify contrast and focus states before release.
5. Keep visual consistency with trust-oriented fintech tone.

## 11) Current Source of Truth in Code

- Theme tokens and utilities: `src/app/globals.css`
- Font setup and app shell: `src/app/layout.tsx`
- Shared design constants: `src/lib/design-system.ts`
- Button variants: `src/components/ui/button.tsx`
- Key component patterns:
  - Header: `src/components/site/site-header.tsx`
  - Footer: `src/components/site/site-footer.tsx`
  - FAQ accordion: `src/components/ui/faq-accordion.tsx`
  - Floating WhatsApp: `src/components/site/floating-whatsapp.tsx`

