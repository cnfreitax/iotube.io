import { Header } from 'components/Header'
import React from 'react'
import * as S from './styles'

export const WithWrapper = ({ children, hasHeader, alignCenter }) => {
  return (
    <S.Wrapper alignCenter={alignCenter}>
      {hasHeader && <Header />}
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
