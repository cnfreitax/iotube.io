import * as S from './styles'

export type ButtonComponentProps = {
  children: React.ReactNode
  mt?: number
  maxw?: number
  type?: 'button' | 'submit' | 'reset'
}

export const ButtonComponent = ({
  children,
  type,
  ...styleProps
}: ButtonComponentProps) => {
  return (
    <S.Button type={type || 'button'} {...styleProps}>
      {children}
    </S.Button>
  )
}
