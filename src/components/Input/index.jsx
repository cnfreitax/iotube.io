import * as S from './styles'
import Image from 'next/image'
// import { UseFormRegister, FieldValues } from 'react-hook-form'

export const Input = ({ onChange, placheholder, icon, name, register }) => {
  return (
    <S.Label>
      <S.Input placeholder={placheholder} {...register(name)} />

      {icon && (
        <S.SearchButton>
          <Image src="/img/search.svg" width={26} height={26} layout="fixed" />
        </S.SearchButton>
      )}
    </S.Label>
  )
}
