import * as S from './styles'

export const ButtonComponent = ({ children, type, ...styleProps }) => {
  return (
    <S.Button type={type || 'button'} {...styleProps}>
      {children}
    </S.Button>
  )
}
