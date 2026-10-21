---
title: Manual Setup
description: Add Starlight to an existing Astro project.
---

Use this path when the site already exists and you only need the docs layout.

## Install Starlight

From the project folder:

```sh
npx astro add starlight
```

The command installs `@astrojs/starlight` and registers the integration in `astro.config.mjs`.

## Add a docs collection

`src/content.config.ts` defines the `docs` collection. Starlight reads Markdown and MDX from `src/content/docs/` and checks each page’s frontmatter against its schema.

## Point the sidebar at your pages

Each sidebar entry uses a `slug` that matches a file under `src/content/docs/`. Restart the dev server after changing `astro.config.mjs` if the navigation does not update on its own.
