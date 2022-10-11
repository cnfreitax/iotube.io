const base = '#ffffff'
const light = '#282626'
const gray = '#dbdbdb'
const light200 = '#F2F0EB'
const orange100 = '#F2D5BB'
const orange300 = '#F2C185'
const orange900 = '#59320F'

export const breakpoints = ['640px', '920px', '72em']

export const mediaQueries = {
  small: `@media screen and (max-width: ${breakpoints[0]})`,
  medium: `@media screen and (max-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
}

export const colors = {
  base,
  light,
  gray,
  light200,
  orange100,
  orange300,
  orange900
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
