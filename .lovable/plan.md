

# Wildcard Academy — Elite Sales Training Landing Page

## Overview
A high-conversion, dark-mode landing page for a free, application-only sales coaching program. The design language is premium, exclusive, and aggressive — inspired by military-grade discipline meets luxury branding.

**Brand Identity:** Deep matte black (#121212) base, "Closer Red" (#C51631) accents, platinum grey (#9D9B9F) secondary text, white headlines.

---

## Sections to Build

### 1. Sticky Navbar
- Minimalist dark navbar with "Wildcard" logo (red accent icon) on the left
- Center navigation links: The Curriculum, Success Stories, The Vetting
- Right-side CTA button "Apply for Training" in solid red with a subtle pulse animation
- Smooth scroll to corresponding sections on click

### 2. Hero Section — "The Transformation"
- Full-viewport centered typography with massive impact
- Two-line headline: "The World's Elite Sales Training." / "Is Now 100% Free." (second line in red)
- Supporting subtext about training the top 1% of raw talent
- "Start the Application" CTA button with arrow icon
- Subtle dark animated grid background for visual depth

### 3. "The Broken System" — Problem Section
- Split-screen layout: compelling copy on the left, visual on the right
- Headline: "Why pay to learn?"
- Copy explaining the agency model vs. guru model
- Right side: stylized visual placeholder (dark card with red accent elements representing the Wildcard chip concept)

### 4. The Curriculum — Bento Grid
- 4-card grid layout with glassmorphism styling (dark glass, subtle white borders)
- Cards: The Mindset (Brain icon), The Tactics (Scroll icon), The Weaponry (Database icon), The Prize (Briefcase icon)
- Each card has a title, short description, and red-accented icon
- Hover effect: border glows red (#C51631)

### 5. "Who Is This For?" — Qualification Checklist
- Checklist-style section with green checks for ideal candidates and red X marks for disqualified traits
- ✓ Hungry for 6-figure income, ✓ Tired of the 9-5 grind
- ✗ Want a "get rich quick" scheme, ✗ Afraid of rejection
- Bold, direct tone reinforcing exclusivity

### 6. Success Stories — Social Proof
- Section title: "They Took the Wildcard."
- Horizontally scrolling cards featuring student transformations
- Each card: grayscale avatar, name, previous role, current role + income
- Dark card styling consistent with the overall theme

### 7. FAQ Accordion
- Accordion component handling key objections
- Questions like "Why is this free?" and "Is experience required?"
- Clean expand/collapse with smooth animation
- Answers written in direct, confident tone

### 8. Application Section — "The Gatekeeper"
- Narrow, focused center column design creating a sense of exclusivity
- Headline: "We only accept 50 students per month."
- Form fields: Name, Email, "Why do you deserve this spot?" (textarea)
- Full-width red gradient "Submit Application" button
- Form is front-end only (no backend) — shows a success toast on submit

### 9. Footer
- Simple, minimal footer: "Wildcard Academy © 2026. All Rights Reserved."

---

## Design & Interaction Details
- **Scroll reveal animations** on every section using Framer Motion (fade-up, scale-in effects as sections enter viewport)
- **Custom color theme** applied globally via Tailwind CSS variables matching the brand palette
- **Responsive design** — fully mobile-optimized with stacked layouts on smaller screens
- **Smooth scroll** navigation from navbar links to page sections
- **No backend required** — purely a front-end landing page with a form that shows a confirmation toast

