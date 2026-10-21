---
title: Project Structure
description: Where the docs site keeps config and content.
---

These are the files you edit most often.

## Layout of the project

```
src/
  content.config.ts      docs collection
  content/docs/          pages
  assets/                images
astro.config.mjs         title, sidebar, social links
```

## What to leave alone

`node_modules/` and `.astro/` are generated. Change pages and `astro.config.mjs` instead of files inside those folders.
