import styled from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProvide'

export const Label = styled.label`
  display: flex;
  align-items: center;
  height: 57px;
  width: 100%;
  max-width: 550px;
  border-bottom: 3px solid ${getPaletteColor('gray')};
  background-color: ${getPaletteColor('base')};
  border-radius: 4px;
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

export const SearchButton = styled.button`
  height: 100%;
  width: 100%;
  background-color: ${getPaletteColor('orange300')};
  border: none;
  cursor: pointer;
  max-width: 60px;
  border-radius: 0 4px 4px 0;
`
