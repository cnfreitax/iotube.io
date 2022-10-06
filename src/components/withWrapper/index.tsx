import { Header } from 'components/Header'
import React from 'react'
import * as S from './styles'

type WithWrapperType = {
  children: React.ReactNode
}

export const WithWrapper = ({ children }: WithWrapperType) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  )
}
