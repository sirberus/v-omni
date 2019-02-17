const circles = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30%" cy="30%" r="20" fill="white" fill-opacity="0.1"/>
  <circle cx="50%" cy="50%" r="20" fill="white" fill-opacity="0.3"/>
  <circle cx="70%" cy="70%" r="20" fill="white" fill-opacity="0.5"/>
</svg>`

const simpleMdiSmall = {
  type: 'mdi',
  value: 'star',
  wrapperClass: 'bg-black w-8 h-8 m-1 rounded-full',
  iconClass: 'text-yellow-dark',
}

const simpleMdiMedium = {
  type: 'mdi',
  value: 'star',
  wrapperClass: 'bg-grey-light w-8 h-8 m-1 rounded',
  iconClass: 'text-orange text-2xl',
}

const simpleMdiLarge = {
  type: 'mdi',
  value: 'star',
  wrapperClass: 'border border-black bg-grey-lighter w-12 h-12 m-1 rounded-lg',
  iconClass: 'text-red text-5xl',
}

const simpleText = {
  type: 'text',
  value: 'JS',
  wrapperClass: 'border border-black bg-yellow-dark w-8 h-8 m-1 rounded-sm',
  iconClass: 'font-sans text-black text-xl font-bold',
}

const simpleEmoji = {
  type: 'text',
  value: '❤️',
  wrapperClass: 'border border-grey-light m-1 cursor-pointer hover:bg-grey-light rounded-full h-10 w-10',
  iconClass: 'text-xl',
}

const simpleSvg = {
  type: 'svg',
  value: circles,
  wrapperClass: 'rounded overflow-hidden w-16 h-16',
  iconClass: 'w-full h-full bg-black',
}

const complex = {
  type: 'complex',
  value: [
    {
      type: 'text',
      value: '📖',
      wrapperClass: 'flex items-center justify-center',
      iconClass: 'text-xl',
    },
    {
      type: 'text',
      value: '+',
      wrapperClass: 'flex flex-row-reverse items-end',
      iconClass: 'bg-green font-medium h-4 rounded-full text-white w-4',
    }
  ],
  wrapperClass: 'bg-grey-darkest rounded border-grey-dark w-16 h-16',
}

export default { 
  simpleMdiSmall, simpleMdiMedium, simpleMdiLarge, 
  simpleText, simpleEmoji, 
  simpleSvg,
  complex
}