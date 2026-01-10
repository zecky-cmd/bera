# Executed Commands

## Project Initialization
The following command was used to create the Next.js project with TypeScript, Tailwind CSS, and ESLint:

```bash
npx create-next-app@latest bera --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

## Project Setup
The following commands were used to set up the project:

```bash
npm install
npm run dev
```

## Portfolio & Supabase Integration
The following commands were used to install UI libraries and configure Supabase:

```bash
# UI Libraries (Framer Motion, Lucide, Tailwind Merge)
npm install framer-motion lucide-react clsx tailwind-merge

# Supabase Client & SSR
npm install @supabase/supabase-js @supabase/ssr

# Create components directory
mkdir components

# Create local env file
echo > .env.local

# Git Commit
git commit -m "conception de mon portfolio"
```
