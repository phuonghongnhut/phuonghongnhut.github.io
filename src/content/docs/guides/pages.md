---
title: Pages
description: How a file in the docs folder becomes a page.
---

Each file in `src/content/docs/` is one page. The folder path is the URL.

## File to URL

| File | URL |
| --- | --- |
| `src/content/docs/index.mdx` | `/` |
| `src/content/docs/manual-setup.md` | `/manual-setup/` |
| `src/content/docs/guides/pages.md` | `/guides/pages/` |

## Frontmatter

Every page starts with `title` and `description`. The title is the heading at the top of the page and the label Starlight uses when a sidebar entry does not set its own label.

```md
---
title: Pages
description: How a file in the docs folder becomes a page.
---
```
