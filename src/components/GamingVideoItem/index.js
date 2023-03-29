import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  VideoItemBody,
  VideoTitle,
  VideoCount,
} from './styledComponents'
import './index.css'

const GamingVideoItem = props => {
  const {videoDetails, darkTheme} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <VideoItemContainer darkTheme={darkTheme}>
      <Link to={`videos/${id}`} className="link">
        <VideoItemBody darkTheme={darkTheme}>
          <img
            src={thumbnailUrl}
            alt="video thumbnail"
            style={{width: '100%'}}
          />
          <VideoTitle as="p" darkTheme={darkTheme}>
            {title}
          </VideoTitle>
          <VideoCount darkTheme={darkTheme}>
            {viewCount} Watching Worldwide
          </VideoCount>
        </VideoItemBody>
      </Link>
    </VideoItemContainer>
  )
}
export default GamingVideoItem
