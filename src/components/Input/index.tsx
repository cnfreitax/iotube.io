import * as S from './styles'
import Image from 'next/image'

type InputProps = {
  onChange?: any
  placheholder: string
  icon?: string
}

export const Input = ({ onChange, placheholder, icon }: InputProps) => {
  return (
    <S.Label>
      <S.Input placeholder={placheholder} />

      {icon && (
        <Image src="/img/search.svg" width={26} height={26} layout="fixed" />
      )}
    </S.Label>
  )
}
