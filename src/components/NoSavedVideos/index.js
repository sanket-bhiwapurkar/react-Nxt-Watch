import './index.css'
import {NoSearchHeading, NoSearchMsg} from './styledComponents'

const NoSavedVideos = props => {
  const {darkTheme} = props
  return (
    <div className="no-videos-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
        className="no-videos-img"
      />
      <NoSearchHeading darkTheme={darkTheme}>
        No saved videos found
      </NoSearchHeading>
      <NoSearchMsg as="p" darkTheme={darkTheme}>
        Save your videos by clicking a button
      </NoSearchMsg>
    </div>
  )
}
export default NoSavedVideos
