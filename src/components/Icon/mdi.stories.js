import { tellStory } from '../../utils/stories';
import wirings from './wirings';


tellStory({
  topic: 'Icon',
  title: 'Simple MDI Icon',
  template: `
    <div class="flex justify-center items-center w-screen h-screen">
      <icon :icon="smallIcon"/>
      <icon :icon="mediumIcon"/>
      <icon :icon="largeIcon"/>
    </div>
  `,
  data: () => ({
    smallIcon: wirings.simpleMdiSmall(),
    mediumIcon: wirings.simpleMdiMedium(),
    largeIcon: wirings.simpleMdiLarge()
  }),
  options: { knobs: { escapeHTML: true } }
})

tellStory({
  topic: 'Icon',
  title: 'Simple Text Icon',
  template: `
    <div class="flex justify-center items-center w-screen h-screen">
      <icon :icon="textIcon"/>
      <icon :icon="emojiIcon"/>
    </div>
  `,
  data: () => ({
    textIcon: wirings.simpleText(),
    emojiIcon: wirings.simpleEmoji()
  })
})

tellStory({
  topic: 'Icon',
  title: 'Simple SVG Icon',
  template: `
    <div class="flex justify-center items-center w-screen h-screen">
      <icon :icon="svgIcon"/>
    </div>
  `,
  data: () => ({
    svgIcon: wirings.simpleSvg()
  })
})

tellStory({
  topic: 'Icon',
  title: 'Complex Icon: Text-Badged Emoji',
  template: `
    <div class="flex justify-center items-center w-screen h-screen">
      <icon :icon="badgeIcon"/>
    </div>
  `,
  data: () => ({
    badgeIcon: wirings.complexTextBadgedEmoji([
      wirings.emojiLayer('Layer 1'),
      wirings.textLayer('Layer 2')
    ])
  })
})

tellStory({
  topic: 'Icon',
  title: 'Complex Icon: MDI-Badged SVG',
  template: `
    <div class="flex justify-center items-center w-screen h-screen">
      <icon :icon="badgeIcon"/>
    </div>
  `,
  data: () => ({
    badgeIcon: wirings.complexMdiBadgedSvg([
      wirings.svgLayer('Layer 1'),
      wirings.mdiLayer('Layer 2')
    ])
  })
})