import styled from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProvide'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background-color: ${getPaletteColor('light200')};
`
