import ReactPlayer from 'react-player'
import * as S from './styles'

export const ResponsivePlayer = ({videoURL}) => {
  return (
    <S.PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url={videoURL}
        width="100%"
        height="100%"
      />
    </S.PlayerWrapper>
  )
}
