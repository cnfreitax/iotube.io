import styled, { keyframes, css } from 'styled-components'
import { getMediaQuery } from 'utils/handleThemeProvide'

const visibleAnimation = keyframes`
  0%  { margin: 25% auto; }
  100% { margin: 0% auto; }
`

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  padding: 14px;
  max-width: 1420px;

`

export const Form = styled.form`
  width: 100%;
  margin: 25% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  ${({isSearching}) => isSearching &&
    css`
      -moz-animation: ${visibleAnimation} 0.8s ease-in 0.8s forwards;
      -webkit-animation: ${visibleAnimation} 0.8s ease-in 0.8s forwards;
      -o-animation: ${visibleAnimation} 0.8s ease-in 0.8s forwards;
      animation: ${visibleAnimation} 0.8s ease-in 0.8s forwards;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    `
  }
`

export const VideoList = styled.div`
  width: 100%;
  margin-top: 40px;
	display: grid;
  justify-items: center;
	grid-template-columns: repeat(3, minmax(180px, 1fr));
	grid-gap: 40px;
	list-style: none;


  ${getMediaQuery('small')} {
    grid-template-columns: repeat(1, minmax(130px, 1fr));
  }
`

