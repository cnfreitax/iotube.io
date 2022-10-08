import { Input } from 'components/Input'
import { api } from '../../api/axios.instance'
import { DEFAULT_PARAMS } from '../../api/defaultParams'
import { useForm } from 'react-hook-form'
import { WithWrapper } from 'components/withWrapper'

import * as S from './styles'

export const HomeContainer = () => {
  const { register, handleSubmit } = useForm()

  const handleSearchVideo = async (title) => {
    const result = await api.get('/search', {
      params: {
        q: title,
        part: 'snippet',
        ...DEFAULT_PARAMS
      }
    })

    return result
  }

  return (
    <WithWrapper hasHeader>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit((e) => handleSearchVideo(e.search))}>
          <Input
            placheholder="search"
            icon="ssas"
            name="search"
            register={register}
          />
        </S.Form>
      </S.Wrapper>
    </WithWrapper>
  )
}
