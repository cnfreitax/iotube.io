import { useRouter } from 'next/router'
import Image from 'next/image'
import { WithWrapper } from 'components/withWrapper'
import { Text } from 'components/Text'
import { Report } from 'components/Report'
import { ResponsivePlayer } from 'components/ResponsivePlayer'

import * as S from './styles'

export const VideoContainer = ({item}) => {
  const router = useRouter()

  const { snippet, statistics, id } = item.items[0]
  const videoTitle = snippet.localized.title
  const videoUrl = ` https://www.youtube.com/watch?v=${id}`

  return (
    <WithWrapper hasHeader>
      <S.Wrapper>
        <S.BackButton>
          <button type="button" onClick={() => router.back()}>
            <Image src="/img/left-arrow.svg" width={25} height={25} />
          </button>
          <Text as={'span'} size={2} fontWeight={500}>
            {videoTitle}
          </Text>
        </S.BackButton>
        <S.Content>
          <ResponsivePlayer videoURL={videoUrl}/>

          <S.Flex>
            <Text as={'span'} size={2}>
            {videoTitle}
            </Text>
            <Report totalLike={statistics.likeCount} totalDeslike={statistics.likeCount} />
          </S.Flex>
          <Text as={'p'} size={3}>
            {snippet.description}
          </Text>

          <Text as={'p'} size={2} fontWeight={600}>
            {statistics.viewCount} views
          </Text>
        </S.Content>
      </S.Wrapper>
    </WithWrapper>
  )
}
