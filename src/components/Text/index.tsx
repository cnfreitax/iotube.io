import { ColorType, FontSizeType } from 'interfaces/theme'
import * as S from './styles'

export type TextProps = {
  color?: ColorType
  size?: FontSizeType
  fontWeight?: 100 | 200 | 400 | 300 | 500 | 600
  lineHeight?: string | number
  as?: React.ElementType
  children: React.ReactNode
  role?: string
}

export const Text = ({
  children,
  color,
  size,
  fontWeight,
  lineHeight,
  as,
  role
}: TextProps) => {
  return (
    <S.Heading
      role={role}
      color={color}
      size={size}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      as={as}
    >
      {children}
    </S.Heading>
  )
}
