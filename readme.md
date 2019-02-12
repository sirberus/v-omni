# V-Omni

Swiss army knife Vue components

## Setup

```sh
npm i v-omni
```

```js
import Vue from 'vue'
import Omni from 'v-omni'

Vue.use(Omni)
```

All examples will use CSS classes defined in [Tailwind](https://tailwindcss.com/docs/what-is-tailwind). Some components also use [MDI icons](https://materialdesignicons.com/). If you would like to use these from CDN, include these in the head of your root HTML:

```html
<link href="https://cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
```

## Components

### Icons

#### MDI Icon

```html
<mdi icon="star"/>
```

[See here](https://cdn.materialdesignicons.com/3.4.93/) for all MDI icons and their names. Note that the value of `icon` on the `<mdi/>` component does not include the 'mdi-' prefix. (icon='star', not icon='mdi-star')

#### Text Icon

Use an array of up to 4 characters as an icon. Works great with Emoji, icon fonts, or to create glyphs for acronyms.

```html
<text-icon icon="👌"/>
```

#### Icon

This is a flexible component that dynamically displays an icon as described by an Object.

```html
<icon :icon="{ type: 'mdi', 'mdi': 'star' }"/>
```

The `type` has possible values 'mdi', 'svg', 'text', and 'img'.