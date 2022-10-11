import styled, { keyframes } from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProvide'

const visibleAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
`


export const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 420px;
  border-radius: 18px;
  padding: 4rem;
  background-color: ${getPaletteColor('base')};

  -moz-animation: ${visibleAnimation} 1s ease-in 1s forwards;
  -webkit-animation: ${visibleAnimation} 1s ease-in 1s forwards;
  -o-animation: ${visibleAnimation} 1s ease-in 1s forwards;
  animation: ${visibleAnimation} 1s ease-in 1s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
`

export const Form = styled.form`
  width: 100%;
`

export const OptionsBox = styled.div`
  margin-top: 12px;
  width: 100%;
`
