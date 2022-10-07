import styled, { css } from 'styled-components'
import { TextProps } from './index'
import { getFontSize, getPaletteColor } from '../../utils/handleThemeProvide'

export const Heading = styled('h1').attrs<TextProps>(({ as }) => ({
  as: as
}))<TextProps>`
  ${({ color, size, fontWeight = 700, lineHeight = 1.5 }) => css`
    color: ${getPaletteColor(color || 'light')};
    font-size: ${getFontSize(size || 1)}};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`
