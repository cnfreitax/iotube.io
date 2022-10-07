import { ButtonComponent } from 'components/Button'
import { Input } from 'components/Input'
import { Text } from 'components/Text'
import { WithWrapper } from 'components/withWrapper'
import * as S from './styles'

export const LoginContainer = () => {
  return (
    <WithWrapper>
      <S.LoginFormBox>
        <Text as={'h1'} size={2} color="orange900">
          iotube
          <Text as={'span'} size={2} color="orange300">
            .io
          </Text>
        </Text>

        <S.Form>
          <Input placheholder="email" />
          <Input placheholder="senha" />
        </S.Form>

        <S.OptionsBox>
          <Text as={'a'} size={5} color="orange900">
            esqueci minha senha
          </Text>
          <ButtonComponent mt={18}>continuar</ButtonComponent>
        </S.OptionsBox>
      </S.LoginFormBox>
    </WithWrapper>
  )
}
