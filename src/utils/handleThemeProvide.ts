import { themeGet } from '@styled-system/theme-get'
import { ColorType, FontSizeType } from 'interfaces/theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMediaQuery = (size: string) => (props: any): any => {
  const queries = themeGet('mediaQueries')(props) || {}
  console.log(queries[size])
  return queries[size]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPaletteColor = (color: ColorType) => (props: any): string => {
  return themeGet('colors')(props)[color]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFontSize = (size: FontSizeType) => (props: any): string => {
  return themeGet('fontSize')(props)[size]
}

export { getMediaQuery, getPaletteColor, getFontSize }
