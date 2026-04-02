# oyik.realestate.ai - Project Summary

**Last Updated:** 2026-04-03 (Asia/Calcutta)

## Project Snapshot

- App: Next.js static-export site in `oyik-ai-site`
- Brand: `Oyik RealEstate.ai`
- Local build: `npm run build`
- Deploy target: Netlify
- Current git remote: `git@github.com:neeshu144035/oyik-ai-site.git`

## Current State

- Homepage refined with premium layout updates, tighter flagship chatbot showcase, and `Services` label in navbar
- Route navigation now scrolls to the top on page change
- About page, services index, and all service detail pages have been redesigned with updated SEO content
- Shared FAQ content at the bottom of service pages has been fully replaced with the latest approved copy

## Service Pages Completed

- `/services/chat`
- `/services/voice`
- `/services/reminders`
- `/services/email`
- `/services/maintenance`
- `/services/ai-marketing`
- `/services/workflow-automation`

## Important Implementation Notes

- Premium design direction matters on every content section; avoid plain empty cards or large dead space
- For SEO-led service pages, keep user-provided H1/H2/body copy structure exact unless explicitly asked to change wording
- Green inline text in provided references means hyperlink text; target route is usually written in brackets in the brief
- Shared service FAQs are controlled in `src/components/shared/PageFaqSection.tsx`

## Key Files

- `src/components/shared/AppShell.tsx`
- `src/components/shared/Navbar.tsx`
- `src/components/shared/PageFaqSection.tsx`
- `src/components/sections/features/ChatbotShowcase.tsx`
- `src/app/services/`
- `src/app/about/`

## Preview / Deploy Notes

- Static export is configured through `netlify.toml`
- Netlify build command: `npm run build`
- Netlify publish directory: `out`
- Repo is already linked to Netlify site ID: `76cdcaff-711b-4a34-8480-c01044ca5a11`

## Working Rule

- Do not revert unrelated work in the repo; this project often has an intentionally dirty worktree during content/design iterations
