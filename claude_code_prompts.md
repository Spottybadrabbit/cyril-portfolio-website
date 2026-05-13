# Claude Code Conversation Script
# Use this file during your tutorial recording — paste each prompt in order into Claude Code

# ─────────────────────────────────────────────────────────────────
# STEP 1 — AFTER CLONING AND RUNNING pnpm dev
# ─────────────────────────────────────────────────────────────────

PROMPT 1:
"Read the project structure and tell me the key files I'll need to edit to personalise this portfolio. 
Start with src/data/resume.tsx and give me a one-line summary of what each field does."

# ─────────────────────────────────────────────────────────────────
# STEP 2 — REPLACE THE DATA FILE WITH YOUR REAL INFO
# ─────────────────────────────────────────────────────────────────

PROMPT 2:
"Replace the entire contents of src/data/resume.tsx with the file I'm about to paste.
Do not change the import statements or TypeScript types — only replace the DATA object values.

Here is my data:

[PASTE YOUR resume.tsx FILE HERE — the one we generated above]

After replacing the data, run a quick check: are there any TypeScript errors or missing fields 
compared to the original file?"

# ─────────────────────────────────────────────────────────────────
# STEP 3 — CUSTOMISE THE HERO SECTION
# ─────────────────────────────────────────────────────────────────

PROMPT 3:
"In src/app/page.tsx, find the hero/intro section at the top of the page.
Update the description line so it reads exactly:
'Software Engineer · AI Builder · Former VC Managing Partner · Forbes 30 Under 30. 
Currently shipping 30 AI apps in public. Follow the journey → @dayinthelifeofatechie'

Keep all existing BlurFade wrappers and animation delays intact."

# ─────────────────────────────────────────────────────────────────
# STEP 4 — ADD PATENTS + PUBLICATIONS SECTIONS
# ─────────────────────────────────────────────────────────────────

PROMPT 4:
"In src/app/page.tsx, add two new sections below the Projects section:
1. A 'Patents' section that maps over DATA.patents and displays each patent as a card 
   with title, year, and a link to the Google Patents page.
2. A 'Publications' section that maps over DATA.publications and shows title, authors, 
   venue, year, citation count, and a link to the paper.

Wrap both sections in BlurFade with a delay that continues the existing stagger pattern.
Use the same card styling (Card, CardHeader, CardContent from shadcn) as the Projects section.
Do not install any new dependencies."

# ─────────────────────────────────────────────────────────────────
# STEP 5 — ADD THE AWARDS SECTION
# ─────────────────────────────────────────────────────────────────

PROMPT 5:
"Add an 'Awards & Recognition' section to src/app/page.tsx below the Publications section.
Map over DATA.awards and display each award as a Badge component (from shadcn/ui).
Wrap the badges in a flex-wrap container. 
Keep the BlurFade wrapper with the next stagger delay."

# ─────────────────────────────────────────────────────────────────
# STEP 6 — STYLE THE DOCK NAVBAR
# ─────────────────────────────────────────────────────────────────

PROMPT 6:
"In the Dock navbar, make sure the social icons include GitHub, LinkedIn, Twitter/X, 
and YouTube — in that order. Check the DATA.contact.social object and confirm all 
icons with navbar: true are shown. If YouTube is missing from the icons, add it."

# ─────────────────────────────────────────────────────────────────
# STEP 7 — BLOG / BEEHIIV LINK
# ─────────────────────────────────────────────────────────────────

PROMPT 7:
"In the navbar, the Blog link currently routes to /blog (internal MDX).
I want to keep the internal blog but also add an external link to my Beehiiv newsletter 
at https://cyril-lutterodt.beehiiv.com/ — add this as a 'Newsletter' icon in the Dock 
that opens in a new tab. Use the ExternalLink icon from lucide-react."

# ─────────────────────────────────────────────────────────────────
# STEP 8 — FINAL REVIEW + DARK MODE CHECK
# ─────────────────────────────────────────────────────────────────

PROMPT 8:
"Run a final review of src/app/page.tsx and src/data/resume.tsx:
1. Are all sections wrapped in BlurFade?
2. Is dark mode default (check next-themes config)?
3. Are there any hardcoded placeholder strings left from the original template 
   (like 'Dillion Verma' or 'Dillion')? Replace any you find with 'Cyril Lutterodt'.
4. Are there any TypeScript errors?
Report what you find and fix everything in one pass."

# ─────────────────────────────────────────────────────────────────
# STEP 9 — PREPARE FOR DEPLOY
# ─────────────────────────────────────────────────────────────────

PROMPT 9:
"Create a CLAUDE.md at the project root that documents:
- The tech stack (Next.js 14, TypeScript, Tailwind, shadcn/ui, Magic UI, Framer Motion)
- That all content lives in src/data/resume.tsx
- That BlurFade wrappers must always be preserved
- That pnpm is the only package manager to use
- That dark mode is the default theme
- Owner: Cyril Lutterodt, [redacted], @dayinthelifeofatechie

This file will help future Claude Code sessions understand the project without re-reading everything."

PROMPT 10:
"Run pnpm build and tell me if there are any build errors. 
If there are, fix them. Do not change any data or design — only fix the TypeScript/build errors."

# ─────────────────────────────────────────────────────────────────
# STEP 10 — PUSH TO GITHUB
# ─────────────────────────────────────────────────────────────────

# Run manually in terminal (don't ask Claude Code to do this unless you have GitHub CLI):
# git remote remove origin
# git remote add origin https://github.com/<your-username>/portfolio.git
# git add -A
# git commit -m "Initial portfolio setup — Cyril Lutterodt"
# git push -u origin main

# ─────────────────────────────────────────────────────────────────
# BONUS PROMPTS (use after deploying, for upgrades)
# ─────────────────────────────────────────────────────────────────

BONUS PROMPT A — Add Globe component:
"Install the Magic UI Globe component:
npx shadcn@2.1.6 add 'https://magicui.design/r/globe'
Then add it to the hero section in src/app/page.tsx — position it to the right of 
the hero text. Keep it inside the BlurFade wrapper."

BONUS PROMPT B — Fix any shadcn import path bug:
"Check all files in src/components/magicui/ for any import that says 
'from \"/lib/utils\"' (absolute path without @). 
Replace every instance with 'from \"@/lib/utils\"' (relative alias path)."

BONUS PROMPT C — Add a 'Currently building' banner:
"Add a small animated banner at the very top of the page (above the navbar) that says:
'🚀 Shipping 30 AI apps in 30 days — #VibeCodeWithC — Follow @dayinthelifeofatechie'
Use a marquee/ticker animation. The banner should be dismissible."

BONUS PROMPT D — Add Squanchy to project video preview:
"In the Squanchy project card in DATA.projects, 
update the video field to '/squanchy-demo.mp4' 
and make sure the ProjectCard component renders it as a hover-autoplay video preview.
(I will add the actual video file to /public/squanchy-demo.mp4 separately.)"
