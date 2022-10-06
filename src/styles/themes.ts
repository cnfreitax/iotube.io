const base = '#ffffff'
const light = '#282626'
const gray = '#003333'

export const breakpoints = ['640px', '64em', '72em']

export const mediaQueries = {
  small: `@media screen and (max-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
}

export const colors = {
  base,
  light,
  gray
}

const fontSize = {
  1: '4rem',
  2: '2.2rem',
  3: '1.8rem',
  4: '1.5rem',
  5: '1.3rem',
  6: '1rem'
}

export const theme = {
  colors,
  fontSize,
  mediaQueries
}
