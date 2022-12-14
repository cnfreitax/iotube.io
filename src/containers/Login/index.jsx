import { useEffect } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import Cookie from 'js-cookie'

import { ButtonComponent } from 'components/Button'
import { Input } from 'components/Input'
import { Text } from 'components/Text'
import { WithWrapper } from 'components/withWrapper'

import * as S from './styles'
import { useUser } from 'context/useContext'

export const LoginContainer = () => {
  const { loginUser, loggedUser } = useUser()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    ;(() => {
      if (loggedUser) {
        Router.push('/home')
      }
    })()
  }, [loggedUser])

  const onSubmit = (data) => {
    loginUser(data)
  }

  return (
    <WithWrapper alignCenter>
      <S.LoginFormBox>
        <Text as={'h1'} size={2} color="orange900">
          iotube
          <Text as={'span'} size={2} color="orange300">
            .io
          </Text>
        </Text>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input placheholder="email" name="user" register={register} />
          <Input placheholder="senha" name="password" register={register} />

          <S.OptionsBox>
            <Text as={'a'} size={5} color="orange900">
              esqueci minha senha
            </Text>
            <ButtonComponent type="submit" mt={18}>
              continuar
            </ButtonComponent>
          </S.OptionsBox>
        </S.Form>
      </S.LoginFormBox>
    </WithWrapper>
  )
}
