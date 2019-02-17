import { text, boolean } from '@storybook/addon-knobs';

const knobs = { text, boolean }

const knobOfType = (knobType) => (knobLabel, overrideValue, overrideGroupLabel) => {
  if ((overrideValue !== undefined) && (overrideGroupLabel !== undefined)) {
    // If both overrides are defined, the defaults don't matter, so just return the knob.
    const fullKnobLabel = overrideGroupLabel
      ? `${overrideGroupLabel}: ${knobLabel}`
      : knobLabel
    return knobs[knobType](fullKnobLabel, overrideValue, overrideGroupLabel)
  } else {
    // If either or both overrides were not provided, return a function that will take defaults.  
    return (defaultValue, defaultGroupLabel) => {
      const groupLabel = overrideGroupLabel || defaultGroupLabel
      const value = overrideValue || defaultValue
      const fullKnobLabel = groupLabel 
        ? `${groupLabel}: ${knobLabel}`
        : knobLabel
      return knobs[knobType](fullKnobLabel, value, groupLabel)
    }
  }
}

export const textKnob = knobOfType('text')
export const booleanKnob = knobOfType('boolean')

export const wireKnobs = (groupLabel, defaultData, schema) => {
  return (labelOverride) => { // Has to return a function for wiring to be reactive
    let wiring = {}
    for (let [key, value] of Object.entries(schema)) {
      if (typeof value === 'function') {
        // Functions are knob configurations that expect a default value and a group label
        wiring[key] = value(defaultData[key], labelOverride || groupLabel)
      } else {
        wiring[key] = value
      }
    }
    return Object.assign({...defaultData}, {...wiring})
  }
}