import styled from 'styled-components'
import { darken } from 'polished'
import { getFontSize, getPaletteColor } from 'utils/handleThemeProvide'

export const Button = styled.button`
  margin-top: ${({ mt }) => mt || 12}px;
  width: 100%;
  max-width: ${({ maxw }) => `${maxw}px` || '100%'};
  height: 52px;
  max-height: 57px;
  border-radius: 6px;
  padding: 8px;
  border: 2px solid ${getPaletteColor('gray')};
  border-radius: 12px;
  font-size: ${getFontSize(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getPaletteColor('orange300')};
  color: ${getPaletteColor('orange900')};
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${darken(0.1, '#F2C185')};
  }
`
