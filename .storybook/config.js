import { configure, addDecorator } from '@storybook/vue';


/* Install vue plugin to globally register components */
import Vue from 'vue';
import Omni from '../src/index.js';
Vue.use(Omni)


/* 
  Configure addon: viewports
  https://github.com/storybooks/storybook/tree/master/addons/viewport 
*/
import { configureViewport } from '@storybook/addon-viewport';
configureViewport()


/* 
  Configure addon: console 
  https://github.com/storybooks/storybook-addon-console
*/
// import '@storybook/addon-console';
// import { withConsole } from '@storybook/addon-console';
// addDecorator((storyFn, context) => withConsole()(storyFn)(context)); 


/* Dynamically import and load stories */
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}


/* Registering the configuration */
configure(loadStories, module);