---
title: Site Search
description: How the header search box works.
---

The search field in the header is built in. In local development it can tell you that search is available after a production build.

## Build the index

```sh
npm run build
```

Pagefind indexes the built pages. `npm run preview` then serves the site with search working.

## What gets indexed

Published docs pages are included. Draft pages (`draft: true` in frontmatter) stay out of production and out of the index.
