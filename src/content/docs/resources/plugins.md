---
title: Plugins and Integrations
description: Extend this docs site with Starlight plugins.
---

Starlight plugins are Astro integrations that add features such as extra sidebar behavior or generated pages.

## Add a plugin

Install the package, then pass it in the Starlight config:

```js
import starlight from '@astrojs/starlight';

export default {
  integrations: [
    starlight({
      plugins: [/* plugin() */],
    }),
  ],
};
```

Check the plugin’s readme for the exact function name and options before wiring it in.

## Math

Inline formulas sit between single dollar signs, like $a^2 + b^2 = c^2$. A formula on its own uses double dollar signs on separate lines:

$$
x^2
$$

```python

print("hi")
```
