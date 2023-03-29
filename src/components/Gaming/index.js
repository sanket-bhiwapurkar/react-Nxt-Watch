import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import LoaderItem from '../LoaderItem'
import Sidebar from '../Sidebar'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'
import Failure from '../Failure'
import './index.css'
import {
  GamingContainer,
  RightColumn,
  HeadingContainer,
  IconContainer,
  Heading,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusOptions = {
  initial: 'INITIAL',
  isLoading: 'IS_LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    videos: [],
    gamingApiStatus: apiStatusOptions.isLoading,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({gamingApiStatus: apiStatusOptions.isLoading})
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const formattedData = videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videos: formattedData,
        gamingApiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({gamingApiStatus: apiStatusOptions.failure})
    }
  }

  renderGamingApiSwitch = darkTheme => {
    const {gamingApiStatus, videos} = this.state
    switch (gamingApiStatus) {
      case apiStatusOptions.isLoading:
        return <LoaderItem darkTheme={darkTheme} />
      case apiStatusOptions.success:
        return (
          <>
            <ul className="gaming-video-list">
              {videos.map(eachVideo => (
                <GamingVideoItem
                  key={eachVideo.id}
                  videoDetails={eachVideo}
                  darkTheme={darkTheme}
                />
              ))}
            </ul>
          </>
        )
      case apiStatusOptions.failure:
        return <Failure darkTheme={darkTheme} retry={this.getVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <GamingContainer darkTheme={darkTheme} data-testid="gaming">
              <Header />
              <div className="gaming-body">
                <Sidebar darkTheme={darkTheme} />
                <RightColumn>
                  <HeadingContainer darkTheme={darkTheme}>
                    <IconContainer darkTheme={darkTheme}>
                      <SiYoutubegaming className="heading-icon" />
                    </IconContainer>
                    <Heading darkTheme={darkTheme}>Gaming</Heading>
                  </HeadingContainer>
                  {this.renderGamingApiSwitch(darkTheme)}
                </RightColumn>
              </div>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
