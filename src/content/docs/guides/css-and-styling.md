---
title: CSS & Styling
description: Adjust colors and custom CSS for this docs site.
---

Starlight ships with a dark and light theme. The header control labeled Auto follows the system setting.

## Custom CSS

Add a stylesheet and pass it to the Starlight config:

```js
starlight({
  title: 'My Docs',
  customCss: ['./src/styles/custom.css'],
})
```

## Accent color

Override `--sl-color-accent` in that file to change links, the active sidebar item, and buttons without rewriting the layout.
