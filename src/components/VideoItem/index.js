import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'
import {
  VideoItemContainer,
  VideoItemBody,
  Thumbnail,
  VideoInfo,
  ChannelIcon,
  VideoTitle,
  VideoStatsContainer,
  ChannelNameMobile,
  ChannelNameDesktop,
  DotBox,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails, darkTheme, route} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <VideoItemContainer route={route}>
      <Link to={`videos/${id}`} className="link">
        <VideoItemBody route={route}>
          <Thumbnail src={thumbnailUrl} alt="video thumbnail" route={route} />
          <VideoInfo route={route}>
            <ChannelIcon
              src={profileImageUrl}
              alt="channel logo"
              style={{width: '35px'}}
              route={route}
            />
            <div className="video-text">
              <VideoTitle darkTheme={darkTheme} route={route}>
                {title}
              </VideoTitle>
              <ChannelNameDesktop route={route} darkTheme={darkTheme}>
                {name}
              </ChannelNameDesktop>
              <VideoStatsContainer darkTheme={darkTheme} route={route}>
                <ChannelNameMobile route={route} darkTheme={darkTheme}>
                  {name}
                </ChannelNameMobile>
                <DotBox route={route}>
                  <BsDot size={20} />
                </DotBox>
                <p style={{margin: '0px'}}>{viewCount} views</p>
                <BsDot size={20} />
                <p style={{margin: '0px'}}>
                  {formatDistanceToNow(new Date(publishedAt))}
                </p>
              </VideoStatsContainer>
            </div>
          </VideoInfo>
        </VideoItemBody>
      </Link>
    </VideoItemContainer>
  )
}
export default VideoItem
