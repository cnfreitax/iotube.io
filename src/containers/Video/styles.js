import styled from 'styled-components'
import { getMediaQuery } from 'utils/handleThemeProvide'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  ${getMediaQuery('small')} {
    flex-direction: column;
  }
`

export const Content = styled.main`
  width: 100%;
  max-width: 720px;
`

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;

  ${getMediaQuery('large')} {
    position: absolute;
    top: 0;
    left: 0;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    margin-right: 10px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
