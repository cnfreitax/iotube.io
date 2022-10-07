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

export const Text = ({ children, ...styleProps }: TextProps) => {
  return <S.Heading {...styleProps}>{children}</S.Heading>
}
