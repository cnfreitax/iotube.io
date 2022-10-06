import styled from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProvide'

export const Label = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 57px;
  width: 100%;
  max-width: 550px;
  padding: 2rem;
  border: 2px solid ${getPaletteColor('gray')};
  border-radius: 12px;
  font-size: 26px;
`

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
`
