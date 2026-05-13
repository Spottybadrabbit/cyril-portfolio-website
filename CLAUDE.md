# CLAUDE.md — Portfolio Context for Claude Code

## Project Overview
This is a personal developer portfolio for **Cyril Lutterodt**, a software engineer, AI builder, 
former VC Managing Partner, Forbes 30 Under 30, and creator of the **Vibe Code with C** series 
(@dayinthelifeofatechie). The portfolio is built on the Magic UI portfolio template 
(github.com/dillionverma/portfolio) using Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Magic UI.

## Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Components: shadcn/ui + Magic UI
- Animation: Framer Motion (BlurFade, Dock)
- Package manager: pnpm
- Deploy: Vercel
- Domain: Namecheap → Vercel DNS

## Critical Rules
1. **Never remove BlurFade wrappers** — all sections must remain wrapped in BlurFade for scroll animations.
2. **All content lives in `src/data/resume.tsx`** — do not hardcode content elsewhere.
3. **Preserve the Dock navbar** in `src/components/magicui/dock.tsx` and navbar.tsx.
4. **Dark mode is default** — do not remove next-themes or dark mode classes.
5. **pnpm only** — never suggest npm or yarn commands.
6. **TypeScript strict** — no `any` types; respect the DATA object shape.

## Color Brand (Vibe Code with C)
- Primary accent: #00FF88 (neon green) — use for highlights, CTAs, borders
- Background dark: #0D0D0D
- Text primary: #FFFFFF
- Text secondary: #888888

## Key Files
- `src/data/resume.tsx` — ALL personal data (edit this first)
- `src/app/page.tsx` — layout and section order
- `src/components/magicui/` — Magic UI components (dock, blur-fade)
- `src/components/ui/` — shadcn/ui primitives
- `public/` — static assets (avatar image goes here as `me.png` or `me.jpg`)
- `content/` — MDX blog posts

## Owner Info
Name: Cyril Lutterodt
Email: [redacted]
Location: London, United Kingdom
LinkedIn: https://www.linkedin.com/in/cyril-lutterodt
GitHub: (to be added)
Twitter/X: @dayinthelifeofatechie
Instagram: @dayinthelifeofatechie
Blog: https://cyril-lutterodt.beehiiv.com/
Brand: Vibe Code with C / #VibeCodeWithC

## What This Portfolio Should Convey
Cyril is a software engineer who has:
- Built drones, AI health startups, and a VC fund
- Been on Forbes 30 Under 30 and Hurun UK 30 Under 30
- Filed 3 patents and published 4 academic papers
- Won 1st place at the Intercom × Vercel hackathon
- Is currently shipping 30 AI apps in 30 days publicly

The tone should be: technical depth + founder credibility + builder in public.
Not a traditional CV portfolio — it's an active builder's proof-of-work page.
