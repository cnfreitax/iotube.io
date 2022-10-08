import * as S from './styles'

export const Text = ({
  children,
  color,
  size,
  fontWeight,
  lineHeight,
  as,
  role
}) => {
  return (
    <S.Heading
      color={color}
      size={size}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      as={as}
      role={role}
    >
      {children}
    </S.Heading>
  )
}
