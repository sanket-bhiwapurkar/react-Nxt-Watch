import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import LoaderItem from '../LoaderItem'
import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoItem from '../VideoItem'
import Failure from '../Failure'
import './index.css'
import {
  TrendingContainer,
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

class Trending extends Component {
  state = {
    videos: [],
    trendingApiStatus: apiStatusOptions.isLoading,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({trendingApiStatus: apiStatusOptions.isLoading})
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        videos: formattedData,
        trendingApiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({trendingApiStatus: apiStatusOptions.failure})
    }
  }

  renderTrendingApiSwitch = darkTheme => {
    const {trendingApiStatus, videos} = this.state
    switch (trendingApiStatus) {
      case apiStatusOptions.isLoading:
        return <LoaderItem darkTheme={darkTheme} />
      case apiStatusOptions.success:
        return (
          <>
            <ul className="trending-video-list">
              {videos.map(eachVideo => (
                <VideoItem
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
            <TrendingContainer darkTheme={darkTheme} data-testid="trending">
              <Header />
              <div className="trending-body">
                <Sidebar darkTheme={darkTheme} />
                <RightColumn>
                  <HeadingContainer darkTheme={darkTheme}>
                    <IconContainer darkTheme={darkTheme}>
                      <AiFillFire className="heading-icon" />
                    </IconContainer>
                    <Heading darkTheme={darkTheme}>Trending</Heading>
                  </HeadingContainer>
                  {this.renderTrendingApiSwitch(darkTheme)}
                </RightColumn>
              </div>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
