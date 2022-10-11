import { Input } from 'components/Input'
import { api } from '../../api/axios.instance'
import { DEFAULT_PARAMS } from '../../api/defaultParams'
import { useForm } from 'react-hook-form'
import { VideoLink } from 'components/VideoLink'
import { WithWrapper } from 'components/withWrapper'

import * as S from './styles'
import { useState } from 'react'

export const HomeContainer = () => {
  const [searchResult, setSearchResult] = useState()
  const [isSearching, setIsSearching] = useState(false)

  const { register, handleSubmit } = useForm()

  const handleSearchVideo = async (title) => {
    setIsSearching(true)
    const result = await api.get('/search', {
      params: {
        q: title,
        part: 'snippet',
        ...DEFAULT_PARAMS
      }
    })
    setSearchResult(result.data)
  }

  return (
    <WithWrapper hasHeader privateAuth>
      <S.Wrapper>
        <S.Form
          onSubmit={handleSubmit((e) => handleSearchVideo(e.search))}
          isSearching={isSearching}
        >
          <Input
            placheholder="search"
            icon="ssas"
            name="search"
            register={register}
          />
        </S.Form>

        <S.VideoList>
          {searchResult &&
            isSearching &&
            searchResult.items.map((item) => {
              return <VideoLink item={item} />
            })}
        </S.VideoList>
      </S.Wrapper>
    </WithWrapper>
  )
}
