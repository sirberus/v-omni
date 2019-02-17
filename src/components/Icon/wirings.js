import iconData from './data.js';
import { wireKnobs, textKnob } from '../../utils/knobs';


export const defaultSchema = {
  iconClass: textKnob('Icon Class'),
  iconStyle: textKnob('Icon Style'),
  wrapperClass: textKnob('Wrapper Class'),
  wrapperStyle: textKnob('Wrapper Style'),
  type: textKnob('Type'),
  value: textKnob('Value')
}


/* Simple Icons */
export const simpleMdiSmall = wireKnobs('Small Icon', iconData.simpleMdiSmall, defaultSchema)
export const simpleMdiMedium = wireKnobs('Medium Icon', iconData.simpleMdiMedium, defaultSchema)
export const simpleMdiLarge = wireKnobs('Large Icon', iconData.simpleMdiLarge, defaultSchema)
export const simpleText = wireKnobs('Text Icon', iconData.simpleText, defaultSchema)
export const simpleEmoji = wireKnobs('Emoji Icon', iconData.simpleEmoji, defaultSchema)
export const simpleSvg = wireKnobs('SVG Icon', iconData.simpleSvg, defaultSchema)


/*  Complex Icons */
export const emojiLayer = wireKnobs('Emoji Layer', iconData.simpleEmoji, {
  ...defaultSchema,
  wrapperClass: textKnob('Layer Wrapper Class', 'flex items-center justify-center'),
  value: textKnob('Value', '📖')
})

export const textLayer = wireKnobs('Badge Layer', iconData.simpleText, {
  ...defaultSchema,
  iconClass: textKnob('Icon Class', 'bg-green font-medium h-4 layer rounded-full text-white w-4 text-center -mr-2 -mb-1'),
  wrapperClass: textKnob('Layer Wrapper Class', 'flex flex-row-reverse items-end'),
  value: textKnob('Value', '+')
})

export const mdiLayer = wireKnobs('MDI Layer', iconData.simpleMdiSmall, {
  ...defaultSchema,
  iconClass: textKnob('Icon Class', 'flex items-end text-xs text-red-light -ml-1 -mb-1 bg-white rounded-full'),
  wrapperClass: textKnob('Layer Wrapper Class', 'flex items-end'),
  value: textKnob('Value', 'numeric-3-circle')
})

export const svgLayer = wireKnobs('SVG Layer', iconData.simpleSvg, {
  ...defaultSchema,
  wrapperClass: textKnob('Layer Wrapper Class', 'w-full h-full rounded overflow-hidden'),
})

export const complexTextBadgedEmoji = (layers) => wireKnobs('Icon Wrapper', iconData.complex, {
  wrapperClass: textKnob('Class', 'rounded border-2 border-grey-dark w-10 h-10'),
  wrapperStyle: textKnob('Style', ''),
  value: layers,
})()

export const complexMdiBadgedSvg = (layers) => wireKnobs('Icon Wrapper', iconData.complex, {
  wrapperClass: textKnob('Class', 'w-8 h-8'),
  wrapperStyle: textKnob('Style', ''),
  value: layers,
})()


export default { 
  simpleMdiSmall, simpleMdiMedium, simpleMdiLarge, 
  simpleText, simpleEmoji, simpleSvg, 
  emojiLayer, textLayer, mdiLayer, svgLayer,
  complexTextBadgedEmoji, complexMdiBadgedSvg
}