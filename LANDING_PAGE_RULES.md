# Landing Page Rules

These rules must be followed before creating, editing, building, staging, pushing, or deploying any landing page in this repository.

## Current Project Structure

- The deployable Git/Vercel project root is `tcs-lp`.
- Existing landing pages live as separate subfolders inside `tcs-lp`.
- The combined Vercel build is controlled by `tcs-lp/package.json`, `tcs-lp/scripts/build-multi-lp.sh`, and `tcs-lp/vercel.json`.
- The production landing page domain should use URL paths like `https://lp.tasccorporateservices.com/name`.
- Existing live routes must remain available whenever a new landing page is added or an existing one is edited.

Current live route folders in `tcs-lp`:

- `PRO Landing Page` -> `/uae-pro`
- `TCS VAT Filing UAE` -> `/uae-vat-filing`
- `Saudi Business Setup` -> `/saudi-business-setup`
- `KSA Workforce Governance Advisory` -> `/ksa-workforce-advisory`

## Critical Root Safety Rule

Do not overwrite the project root casually.

The root is the top-level folder and files Vercel serves from. In this repository, that means the `tcs-lp` root and its shared routing/build files. These files may contain the homepage, shared routing, build script, and the folder structure that makes existing landing page URLs work.

Never deploy only one landing page folder by itself if the production Vercel project expects the combined `tcs-lp` output. Doing that can remove the other existing landing pages from the live site and cause 404 errors.

Only update root-level files when the change is required for routing, listing, build orchestration, metadata, or deployment. When root files are changed, preserve all existing landing page routes.

## Required First Step

Before doing any landing page work, inspect the existing project and ask the user:

> Are you creating a new landing page or editing an existing landing page?

Do not assume the answer.

Also run a Git status check from `tcs-lp` before editing:

```bash
git status --short
```

If there are unrelated user changes, leave them alone.

## Editing An Existing Landing Page

If the user wants to edit an existing landing page:

1. Confirm which landing page and route they want edited.
2. Edit only that landing page's folder unless a shared/root change is explicitly required.
3. Do not touch other landing page folders.
4. Do not rename, delete, or move any existing landing page folder unless the user explicitly asks for that.
5. Preserve the existing URL slug unless the user explicitly asks for a URL change.
6. Build and test the edited page.
7. Verify the edited page route still works.
8. Verify existing unrelated routes were not removed from `vercel.json` or the combined build script.

## Creating A New Landing Page

If the user wants a new landing page:

1. Confirm the requested landing page name.
2. Convert the name into a lowercase, URL-safe slug.
   - Example: `KSA Workforce Advisory` -> `/ksa-workforce-advisory`
   - Example final URL: `https://lp.tasccorporateservices.com/ksa-workforce-advisory`
3. Check whether a new subfolder already exists for that landing page inside `tcs-lp`.
4. Check whether source files and assets exist in that subfolder.
5. If source files/assets are missing, stop and ask the user to upload them into the new landing page subfolder.
6. If the user does not have source files and only has a Figma file, ask the user to provide full-page screenshots from Figma before building.
7. Do not start implementation until the source assets or screenshots are available.
8. Build the page in its own folder.
9. Add the new page to the combined build script without removing existing pages.
10. Add the new route and asset rewrites to `tcs-lp/vercel.json` without removing existing rewrites.
11. If there is a root homepage or live landing page listing, update it to include the new live landing page while preserving all existing links.

## Required New Route Pattern

Every new landing page must have a custom URL path ending with the page slug:

```text
https://lp.tasccorporateservices.com/name
```

Use lowercase URL-safe slugs:

- Use hyphens instead of spaces.
- Avoid uppercase letters.
- Avoid special characters.
- Keep slugs short, descriptive, and stable.

## Build And Verification Checklist

Before saying a landing page is complete:

1. Run the relevant build command from the correct folder.
2. For combined deployment, run the build from `tcs-lp`:

```bash
npm run build
```

3. Confirm the combined `dist` output contains all existing landing page route folders plus the new or edited one.
4. Check `tcs-lp/vercel.json` still includes all existing route rewrites.
5. Verify the edited/new landing page locally when possible.
6. Verify at least a few existing routes still work locally or in the built output.
7. Check SEO metadata for the landing page:
   - title
   - meta description
   - canonical path if used
   - open graph image if available

## Staging And Handoff Rule

Once a landing page is created, developed, and staged, inform the user clearly:

> The landing page is now ready to be pushed to Git. After it is pushed, it should be deployed from Git to Vercel with the correct landing page URL.

Do not imply that the page is live until Git push, Vercel deployment, and URL verification are complete.

## Git And Deployment Process

When the user approves pushing/deployment:

1. Re-check Git status from `tcs-lp`.
2. Confirm only intended files are changed.
3. Commit the landing page changes.
4. Push to Git.
5. Deploy from Git to the correct Vercel project.
6. Verify the final production URL, for example:

```text
https://lp.tasccorporateservices.com/name
```

7. Verify existing production landing page URLs still load.

## Never Do These

- Do not overwrite the `tcs-lp` root with a single landing page.
- Do not deploy a single landing page folder as if it were the whole production site.
- Do not remove existing routes from `vercel.json`.
- Do not remove existing landing pages from `scripts/build-multi-lp.sh`.
- Do not delete or rename existing landing page folders without explicit user approval.
- Do not edit unrelated landing pages while working on one page.
- Do not build from Figma alone without screenshots or usable exported assets.
- Do not say a landing page is live before production URL verification.

## Agent Prompt For Future Work

When asked to work on landing pages in this repo, start with:

1. Inspect `tcs-lp` and existing landing page folders.
2. Read this `LANDING_PAGE_RULES.md` file.
3. Ask whether the user wants to create a new landing page or edit an existing one.
4. Follow the matching workflow above.
