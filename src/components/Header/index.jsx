import { Text } from 'components/Text'
import * as S from './styles'
import Image from 'next/image'
import { useUser } from 'context/useContext'


export const Header = () => {
  const {logoutUser} = useUser()
  return (
    <S.Header>
      <S.DivInfoUser>
        <Text as="span" size={3}>
          nome usuario
        </Text>
        <Text as="span" size={3}>
          email@usuar.com
        </Text>
      </S.DivInfoUser>

      <S.ButtonLogout onClick={() => logoutUser()}>
        <Image src="/img/logout.svg" width={26} height={26} layout="fixed" />
      </S.ButtonLogout>
    </S.Header>
  )
}
