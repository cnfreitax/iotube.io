import { Text } from 'components/Text'
import Image from 'next/image'
import * as S from './styles'

export const Report = ({ totalLike, totalDeslike }) => {
  return (
    <S.Wrapper>
      <S.ReportTotal>
        <Image src="/img/like.svg" width={25} height={25} />
        <Text as="span" size={3}>
          {totalLike}
        </Text>
      </S.ReportTotal>

      <S.ReportTotal>
        <Image src="/img/deslike.svg" width={25} height={25} />
        <Text as="span" size={3}>
          {totalDeslike}
        </Text>
      </S.ReportTotal>
    </S.Wrapper>
  )
}
