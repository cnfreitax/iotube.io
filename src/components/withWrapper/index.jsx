import React from 'react'
import { Header } from 'components/Header'
import { useUser } from 'context/useContext'
import { useRouter } from 'next/router'
import * as S from './styles'

export const WithWrapper = ({ children, hasHeader, alignCenter, privateAuth }) => {

  const { loggedUser } = useUser()
  const router = useRouter()

  React.useEffect(() => {
    (() => {
      if(privateAuth && !loggedUser) {
        router.push('/')
      }
    })()
  }, [loggedUser])

  return (
    <S.Wrapper alignCenter={alignCenter}>
      {hasHeader && <Header />}
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
