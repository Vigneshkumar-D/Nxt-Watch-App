import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemContainer,
  VideoThumbnail,
  VideoDetailsContainer,
  ProfileImage,
  VideoDetailsDesContainer,
  VideoTitle,
  ChannelName,
  ViewCountAndPublishedDate,
  ViewCount,
  PublishedDate,
} from './styledComponent'

const VideoItem = props => {
  const {eachItem} = props
  const {
    id,
    title,
    name,
    publishedAt,
    profileImageUrl,
    viewCount,
    thumbnailUrl,
  } = eachItem

  const getTimeDistance = () => {
    const timeDistance = formatDistanceToNow(new Date(publishedAt))
    return timeDistance
  }

  return (
    <Link to={`/videos/${id}`} className="link-item">
      <VideoItemContainer>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <VideoDetailsDesContainer>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <ViewCountAndPublishedDate>
              <ViewCount>{viewCount} views</ViewCount>
              <PublishedDate>{getTimeDistance()} ago</PublishedDate>
            </ViewCountAndPublishedDate>
          </VideoDetailsDesContainer>
        </VideoDetailsContainer>
      </VideoItemContainer>
    </Link>
  )
}
export default VideoItem
