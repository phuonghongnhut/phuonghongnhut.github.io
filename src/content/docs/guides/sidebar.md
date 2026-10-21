---
title: Sidebar Navigation
description: Group pages in the left sidebar.
---

The sidebar is the `sidebar` array in `astro.config.mjs`. Each group has a `label` and an `items` list.

## Link to a page

```js
{ label: 'Pages', slug: 'guides/pages' }
```

`slug` matches the file path under `src/content/docs/`, without the extension. The home page slug is `index`.

## Groups

Set `collapsed: true` to tuck a group away until someone opens it. Reference uses that. A `badge` adds a small label, such as `New` on Resources.
