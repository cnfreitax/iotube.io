import styled from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProvide'

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: ${getPaletteColor('light200')};
`

export const Content = styled.main`
  display: flex;
  flex: 1;
  max-height: calc(100% - 74px);
  padding: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
