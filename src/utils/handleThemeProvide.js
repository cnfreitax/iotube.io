import { themeGet } from '@styled-system/theme-get'

const getMediaQuery = (size) => (props) => {
  const queries = themeGet('mediaQueries')(props) || {}
  console.log(queries[size])
  return queries[size]
}

const getPaletteColor = (color) => (props) => {
  return themeGet('colors')(props)[color]
}

const getFontSize = (size) => (props) => {
  return themeGet('fontSize')(props)[size]
}

export { getMediaQuery, getPaletteColor, getFontSize }
