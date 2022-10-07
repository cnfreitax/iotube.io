import * as S from './styles'

export type ButtonComponentProps = {
  children: React.ReactNode
  mt?: number
  maxw?: number
}

export const ButtonComponent = ({
  children,
  ...styleProps
}: ButtonComponentProps) => {
  return <S.Button {...styleProps}>{children}</S.Button>
}
