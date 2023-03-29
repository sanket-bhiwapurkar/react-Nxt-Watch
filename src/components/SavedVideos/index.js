import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoItem from '../VideoItem'
import NoSavedVideos from '../NoSavedVideos'
import './index.css'

import {
  SavedVideosContainer,
  RightColumn,
  HeadingContainer,
  IconContainer,
  Heading,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, savedVideos} = value
          return (
            <SavedVideosContainer
              darkTheme={darkTheme}
              data-testid="savedVideos"
            >
              <Header />
              <div className="saved-videos-body">
                <Sidebar darkTheme={darkTheme} />
                <RightColumn>
                  <HeadingContainer darkTheme={darkTheme}>
                    <IconContainer darkTheme={darkTheme}>
                      <MdPlaylistAdd className="heading-icon" />
                    </IconContainer>
                    <Heading darkTheme={darkTheme}>Saved Videos</Heading>
                  </HeadingContainer>
                  {savedVideos.length > 0 ? (
                    <ul className="saved-videos-list">
                      {savedVideos.map(eachVideo => (
                        <VideoItem
                          key={eachVideo.id}
                          videoDetails={eachVideo}
                          darkTheme={darkTheme}
                        />
                      ))}
                    </ul>
                  ) : (
                    <NoSavedVideos darkTheme={darkTheme} />
                  )}
                </RightColumn>
              </div>
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideos
