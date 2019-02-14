import { configure, addDecorator } from '@storybook/vue';

import Vue from 'vue';
import Omni from '../src/index.js';

Vue.use(Omni)

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(() => ({
  template: `
    <div class="text-center">
      <story/>
    </div>
  `
}))

configure(loadStories, module);