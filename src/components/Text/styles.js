import styled, { css } from 'styled-components'
import { getFontSize, getPaletteColor } from '../../utils/handleThemeProvide'

export const Heading = styled('h1').attrs(({ as }) => ({
  as: as
}))`
  ${({ color, size, fontWeight = '400', lineHeight = 1.5 }) => css`
    color: ${getPaletteColor(color || 'light')};
    font-size: ${getFontSize(size || 1)}};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`
