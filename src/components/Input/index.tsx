import * as S from './styles'
import Image from 'next/image'

type InputProps = {
  onChange: any
}

export const Input = ({ onChange }: InputProps) => {
  return (
    <S.Label>
      <S.Input placeholder="search" onChange={(event) => onChange(event)} />
      <Image src="/img/search.svg" width={26} height={26} layout="fixed" />
    </S.Label>
  )
}
