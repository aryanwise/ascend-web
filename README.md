# Ascend Web

Landing page + interactive demo for [Ascend](https://github.com/YOUR_USERNAME/ascend), the AI cognitive partner that doesn't shame you for missing tasks.

## Tech

- **Next.js 15** (App Router, TypeScript, static export)
- **React 19**
- **Tailwind CSS 3.4**
- **lucide-react** for icons
- **Formspree** for waitlist signups
- **GitHub Pages** for hosting

## What's inside

- **`/`** — Marketing landing page (hero, problem, how it works, embedded demo, features, tech, waitlist)
- **`/demo`** — Standalone interactive phone demo (full-screen, fully playable)

The demo simulates the real app:
1. Pick a life area (9 to choose from)
2. Describe your goal in your own words
3. Answer 5 scripted AI questions
4. See a real plan generated based on your area
5. Check off tasks on Home, add daily priorities
6. Receive a Two-Strike intervention (automatic after a moment on Home)
7. Talk to the Coach with free-text input (keyword-matched pre-written responses)

No backend. No data persists. Everything resets on refresh.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before deploying

### 1. Update `next.config.js`

Set `repoName` to match your GitHub repo:

```js
const repoName = 'your-repo-name'; // e.g. 'ascend-web'
```

If hosting at a custom domain or `username.github.io` (root), set `repoName = ''`.

### 2. Add your Formspree endpoint

In `src/components/landing/WaitlistSection.tsx`, replace:

```ts
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
```

With your actual endpoint.

### 3. Update GitHub link in footer

In `src/components/landing/Footer.tsx`, replace `YOUR_USERNAME`.

## Deploy to GitHub Pages

The `.github/workflows/deploy.yml` workflow does this automatically on push to `main`.

**One-time setup on GitHub:**
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Push to `main` — workflow runs, deploys to `https://YOUR_USERNAME.github.io/REPO_NAME/`

That's it. Subsequent pushes auto-deploy in ~2 minutes.

## Manual build

```bash
npm run build
```

Generates static HTML in `./out`. You can serve this anywhere — Cloudflare Pages, Netlify, Vercel, S3, your own server.

## Project structure

```
ascend-web/
├── .github/workflows/deploy.yml    # GitHub Pages auto-deploy
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, metadata)
│   │   ├── page.tsx                # Landing page (/)
│   │   ├── globals.css             # Tailwind + base styles
│   │   └── demo/
│   │       └── page.tsx            # /demo route
│   ├── components/
│   │   ├── demo/                   # All demo screens
│   │   │   ├── DemoContainer.tsx   # Main orchestrator
│   │   │   ├── IntroScreen.tsx
│   │   │   ├── PickAreaScreen.tsx
│   │   │   ├── GoalTextScreen.tsx
│   │   │   ├── AIDialogueScreen.tsx
│   │   │   ├── PlanReviewScreen.tsx
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── StrikeModal.tsx
│   │   │   ├── CoachModal.tsx
│   │   │   └── DemoComplete.tsx
│   │   ├── landing/                # Landing page sections
│   │   │   ├── NavBar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── DemoSection.tsx     # Embedded demo
│   │   │   ├── Features.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── WaitlistSection.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/
│   │       └── PhoneFrame.tsx      # Reusable phone mockup
│   ├── data/
│   │   ├── areas.ts                # Life areas + reason tags
│   │   └── scripts.ts              # All scripted AI responses
│   ├── lib/
│   │   ├── useDemoState.ts         # useReducer hook for demo state
│   │   └── utils.ts                # Helpers
│   └── types/
│       └── index.ts                # TypeScript definitions
├── next.config.js                  # Static export + basePath
├── tailwind.config.ts              # Ascend design tokens
└── tsconfig.json
```

## Customization

**Design tokens** — `tailwind.config.ts`. All colors come from CSS variables defined here.

**Demo content** — `src/data/scripts.ts`. Change dialogue questions, plan templates, coach responses without touching components.

**Areas** — `src/data/areas.ts`. Add/remove/rename life areas. Each area has color, soft color, and emoji.

## License

MIT
