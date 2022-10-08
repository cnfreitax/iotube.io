import * as S from './styles'
import Image from 'next/image'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { ButtonComponent } from 'components/Button'
// import { regxEmail } from 'utils/regex'

type InputProps = {
  onChange?: any
  placheholder: string
  icon?: string
  name: string
  register: UseFormRegister<FieldValues>
}

export const Input = ({
  onChange,
  placheholder,
  icon,
  name,
  register
}: InputProps) => {
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
