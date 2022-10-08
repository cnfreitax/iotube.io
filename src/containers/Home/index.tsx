import { Input } from 'components/Input'
import { useForm } from 'react-hook-form'
import { WithWrapper } from 'components/withWrapper'

import * as S from './styles'

export const HomeContainer = () => {
  const { register } = useForm()

  return (
    <WithWrapper hasHeader>
      <S.Wrapper>
        <Input
          placheholder="search"
          icon="ssas"
          name="search"
          register={register}
        />
      </S.Wrapper>
    </WithWrapper>
  )
}
