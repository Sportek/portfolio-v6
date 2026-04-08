# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

After modifying the Prisma schema:
```bash
npx prisma migrate dev   # Apply migrations
npx prisma generate      # Regenerate the client (outputs to src/app/generated/prisma/)
```

## Architecture

This is a **Next.js 16 / React 19** personal portfolio with an authenticated admin dashboard.

### Route structure

- `/` — Public landing page (one-page layout: Presentation → Projects → Reviews → Contact)
- `/auth/login`, `/auth/register` — Authentication pages (grouped under `(pages)/auth`)
- `/dashboard` — Protected admin area with sidebar navigation
- `/api/auth/[...all]` — Better Auth catch-all API route

### Feature-based organization (`src/features/`)

Code is split by domain, not by type:

- **`landing/`** — All public-facing sections (presentation, projects, reviews, contact) plus decorative SVG/blob components
- **`auth/`** — Server actions (`signIn`, `signUp`, `getLoggedInUser`) and auth UI components
- **`dashboard/`** — Sidebar, nav, and table components for the admin area
- **`email/`** — Resend email sending utilities and React Email templates
- **`shared/`** — Header, footer, hooks, and generic UI blocks used across features

### Key library integrations

- **Authentication**: [Better Auth](https://better-auth.com) with email/password + Google OAuth (`src/lib/auth.ts`). Client-side auth via `src/lib/auth-client.ts`.
- **Database**: PostgreSQL via Prisma. The generated client lives in `src/app/generated/prisma/` (not the default location). Always import from there or via `src/lib/prisma.ts`.
- **Email**: Resend SDK with React Email templates. From address is `gabriel@minecraft-stats.fr`; contact emails go to `gablandry31@gmail.com`.
- **UI**: Tailwind CSS v4, shadcn/ui (Radix UI primitives), Framer Motion for animations.
- **Drag & drop**: `@dnd-kit` (used in dashboard).

### Environment variables required

```
DATABASE_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
RESEND_API_KEY
BETTER_AUTH_SECRET   # (or equivalent for Better Auth)
```

### Path alias

`@/` maps to `src/` (configured in tsconfig).

## Blog (système d'articles MDX)

### Créer un article

Créer un fichier `.mdx` dans `content/blog/`. Le nom du fichier devient le slug (ex: `mon-article.mdx` → `/blog/mon-article`).

### Frontmatter obligatoire

```yaml
---
title: "Titre de l'article"
date: "2026-04-07"
description: "Description courte pour les cartes et le SEO."
tags: ["TAG1", "TAG2"]
coverImage: "/blog/mon-article/cover.png"
published: true
---
```

- **title** : titre affiché sur la page et dans le SEO
- **date** : format `YYYY-MM-DD`, sert au tri (plus récent en premier)
- **description** : résumé pour les cartes du listing et les balises meta
- **tags** : tableau de strings en majuscules, utilisés pour le filtrage
- **coverImage** : chemin vers l'image de couverture (dans `public/` ou URL externe). Les images locales d'un article vont dans `public/blog/{slug}/`
- **published** : `false` pour masquer un brouillon du build et du listing

### Composants custom disponibles dans le MDX

**Callout** — boîte colorée avec icône (info, warning, tip) :
```mdx
<Callout type="info">Texte informatif avec du **markdown**.</Callout>
<Callout type="warning">Avertissement important.</Callout>
<Callout type="tip">Astuce utile.</Callout>
```

**YouTube** — iframe responsive via l'ID de la vidéo :
```mdx
<YouTube id="dQw4w9WgXcQ" />
```

### Markdown supporté

Tout le GitHub-Flavored Markdown est supporté : tableaux, strikethrough, task lists, blocs de code avec coloration syntaxique (via `rehype-pretty-code` + `shiki`, thème `one-dark-pro`). Les images en markdown (`![alt](src)`) sont automatiquement rendues avec `next/image`.

### Architecture du blog

```
content/blog/*.mdx                              ← articles
src/features/blog/lib/articles.ts               ← types (ArticleMeta, Article) + fonctions de lecture (getAllArticles, getArticleBySlug, getAllTags, getAllSlugs)
src/features/blog/lib/mdx.tsx                   ← composant RSC ArticleContent (MDXRemote + plugins)
src/features/blog/components/mdx-components.tsx  ← mapping HTML → React + composants custom
src/features/blog/components/blog-page-client.tsx← recherche + filtre par tags (client component)
src/app/(pages)/blog/page.tsx                   ← listing (server component)
src/app/(pages)/blog/[slug]/page.tsx            ← page article (SSG avec generateStaticParams)
```

Les pages sont générées statiquement au build (`generateStaticParams`). Le SEO (title, description, og:image) est géré via `generateMetadata` à partir du frontmatter.
