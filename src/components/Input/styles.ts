import styled from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProvide'

export const Label = styled.label`
  display: flex;
  align-items: center;
  height: 57px;
  width: 100%;
  max-width: 550px;
  border-bottom: 3px solid ${getPaletteColor('gray')};
  font-size: 26px;

  & + & {
    margin-top: 10px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background: transparent;
  flex: 1;
  height: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`
