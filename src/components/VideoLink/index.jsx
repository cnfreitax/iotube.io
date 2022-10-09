import { Text } from 'components/Text'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export const VideoLink = ({item}) => {
  const { channelTitle, title, description } = item.snippet
  const { url, width, height} = item.snippet.thumbnails.high

  return (
    <Link
    href={{
      pathname: `/video/[id]`,
      query: {
        id: item.id.videoId,
      },
    }}
    >
      <S.Wrapper>
      <Image src={url} width={width || 480} height={height || 90}/>

        <Text as={'span'} fontWeight={500} size={3}>
          t{title}
        </Text>

        <Text as={'span'} size={4}>
          {channelTitle}
        </Text>

        <Text as={'small'} size={4}>
          {description}
        </Text>
      </S.Wrapper>
    </Link>
  )
}
