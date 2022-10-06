import { Input } from 'components/Input'
import { WithWrapper } from 'components/withWrapper'

import * as S from './styles'

export const HomeContainer = () => {
  const handleSubmitSearch = (event: any) => console.log(event.target.value)

  return (
    <WithWrapper>
      <S.Wrapper>
        <Input onChange={handleSubmitSearch} />
      </S.Wrapper>
    </WithWrapper>
  )
}
