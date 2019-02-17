# V-Omni

Swiss army knife Vue components

## Helpful Links
- [Live Examples - Storybook](https://v-omni.netlify.com/)
- [NPM package](https://www.npmjs.com/package/v-omni)
- MDI Icons [Cheatsheet](https://cdn.materialdesignicons.com/3.4.93/) and [Homepage](https://materialdesignicons.com/)
- [Tailwind](https://tailwindcss.com/docs/what-is-tailwind)

## Setup

```sh
npm i v-omni
```

```js
import Vue from 'vue'
import Omni from 'v-omni'

Vue.use(Omni)
```

All examples use CSS classes defined in [Tailwind](https://tailwindcss.com/docs/what-is-tailwind). Some components also use [MDI Icons](https://materialdesignicons.com/). If you would like to use these from CDN, include these in the head of your root HTML:

```html
<link href="https://cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
```

## Components

### Icon

`<icon>` is a flexible component that dynamically displays an icon as described by an Object.

```html
<icon :icon="{ type: 'mdi', value: 'star' }"/>
```

The `icon` prop accepts the following keys:
- **type** (required) has possible values 'mdi', 'svg', 'text', and 'complex'
- **value** (required) is the value corresponding to the type.
  - For 'text' and 'svg', the value is the string value you'd like to use.
  - For 'mdi', the value is the name of the icon without the `mdi-` prefix
  - For 'complex', the value is an array of non-complex icon prop objects. This will layer the icons in the given order.
- *wrapperClass* and *wrapperStyle* for full vue class and style bindings on the wrapper 
- *iconClass* and *iconStyle* for the same on the icon itself (does not work with 'complex' type)
