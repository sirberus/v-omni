import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

export const tellStory = ({ topic, title, template, data, options }) => {
  storiesOf(topic, module)
    .addDecorator(withKnobs)
    .add(
      title, 
      () => ({
        template,
        data
      }),
      Object.assign(
        { knobs: { escapeHTML: false } },
        options || {}
      )
    )
}