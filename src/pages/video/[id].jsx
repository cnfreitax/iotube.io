import { api } from 'api/axios.instance'
import { DEFAULT_PARAMS } from 'api/defaultParams'
import { VideoContainer } from 'containers/Video'

export default function VideoViewPage({ videoResult }) {
  return <VideoContainer item={videoResult}/>
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const response = await api.get(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics`,
    {
      params: {
        ...DEFAULT_PARAMS
      }
    }
  )

  return {
    props: {
      videoResult: response.data
    }
  }
}
