# StartOne

The leading platform connecting brands with authentic creators. StartOne is a modern influencer marketing and creator collaboration platform built with Next.js 15, featuring a dynamic landing page, creator discovery tools, campaign management, and brand-creator matching.

## Features

- **Interactive Landing Page** — Animated hero section, feature showcases, demo sliders, and testimonial carousels built with Framer Motion
- **Creator Discovery** — Profile carousels showcasing top creators with category filtering
- **Brand Dashboard** — Tools for brands to find, connect, and collaborate with influencers
- **Pricing Plans** — Tiered subscription options for brands and creators
- **About Page** — Company mission, team profiles, and platform story
- **FAQ Section** — Comprehensive answers to common questions about the platform
- **Email CTA** — Lead capture with email subscription forms
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dark Mode** — Theme switching via next-themes
- **Legal Pages** — Privacy policy, terms of service, and cookie policy

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3, tailwind-merge, tailwindcss-animate |
| Components | Radix UI primitives, shadcn/ui, Lucide React icons |
| Forms | React Hook Form + Zod + @hookform/resolvers |
| Animations | Framer Motion, Embla Carousel |
| Charts | Recharts |
| Notifications | Sonner (toast notifications) |
| Theme | next-themes (dark/light mode) |
| Fonts | Geist (Sans + Mono), Inter, Domine |
| Package Manager | pnpm |

## Prerequisites

- **Node.js** >= 20
- **pnpm** >= 9

## Getting Started

```bash
# 1. Clone and install
git clone https://github.com/chaudhary-rishabh/startone.git
cd startone
pnpm install

# 2. Start dev server
pnpm dev
# Open http://localhost:3000
```

## Project Structure

```
startone/
├── app/
│   ├── about/              # About page (mission, team, story)
│   ├── auth/               # Login / register page
│   ├── cookiepolicy/       # Cookie policy page
│   ├── pricing/            # Subscription plans page
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout (Header, Footer, fonts)
│   └── page.tsx            # Home / landing page
├── components/
│   ├── about/              # About page components (testimonial carousel)
│   ├── landing/            # Hero, features, CTA, FAQ, carousels, demo slider, email CTA
│   ├── layout/             # Global Header and Footer
│   ├── pricing/            # Pricing plan cards and comparison
│   └── ui/                 # shadcn/ui primitives (accordion, badge, button, card, etc.)
├── hooks/                  # Custom hooks (use-mobile, use-toast)
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── styles/                  # Global styles
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration with custom theme
├── tsconfig.json
└── package.json
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## License

MIT
