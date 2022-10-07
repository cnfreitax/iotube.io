import styled from 'styled-components'
import { getPaletteColor } from '../../utils/handleThemeProvide'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  background-color: ${getPaletteColor('base')};
  border-bottom: 1px solid ${getPaletteColor('gray')};
  position: fixed;
  width: 100%;
  height: 100%;
  max-height: 74px;
  top: 0;
`

export const DivInfoUser = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonLogout = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
