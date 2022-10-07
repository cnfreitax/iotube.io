import { Header } from 'components/Header'
import React from 'react'
import * as S from './styles'

type WithWrapperType = {
  children: React.ReactNode
  hasHeader?: boolean
}

export const WithWrapper = ({ children, hasHeader }: WithWrapperType) => {
  return (
    <S.Wrapper>
      {hasHeader && <Header />}
      {children}
    </S.Wrapper>
  )
}
