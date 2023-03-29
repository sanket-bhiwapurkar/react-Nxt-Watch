import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import LoaderItem from '../LoaderItem'

import {
  HomeContainer,
  FormInput,
  SearchButton,
  RightColumn,
} from './styledComponents'
import './index.css'
import Header from '../Header'
import Sidebar from '../Sidebar'

import Banner from '../Banner'
import VideoItem from '../VideoItem'
import NoSearchResult from '../NoSearchResult'
import Failure from '../Failure'

import ThemeContext from '../../context/ThemeContext'

const apiStatusOptions = {
  initial: 'INITIAL',
  isLoading: 'IS_LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videos: [],
    searchInput: '',
    homeApiStatus: apiStatusOptions.isLoading,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({homeApiStatus: apiStatusOptions.isLoading})
    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeApiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({homeApiStatus: apiStatusOptions.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResult = () => {
    this.getVideos()
  }

  renderHomeApiSwitch = darkTheme => {
    const {homeApiStatus, videos} = this.state
    switch (homeApiStatus) {
      case apiStatusOptions.isLoading:
        return <LoaderItem darkTheme={darkTheme} />
      case apiStatusOptions.success:
        return (
          <>
            {videos.length === 0 ? (
              <NoSearchResult
                darkTheme={darkTheme}
                retry={this.getSearchResult}
              />
            ) : (
              <ul className="video-list">
                {videos.map(eachVideo => (
                  <VideoItem
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                    darkTheme={darkTheme}
                    route="Home"
                  />
                ))}
              </ul>
            )}
          </>
        )
      case apiStatusOptions.failure:
        return <Failure darkTheme={darkTheme} retry={this.getVideos} />
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomeContainer darkTheme={darkTheme} data-testid="home">
              <Header />
              <div className="home-body">
                <Sidebar darkTheme={darkTheme} />
                <RightColumn id="homeRightColumn">
                  <Banner />
                  <div className="searchbar-container">
                    <FormInput
                      darkTheme={darkTheme}
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      darkTheme={darkTheme}
                      type="button"
                      data-testid="searchButton"
                      onClick={this.getSearchResult}
                    >
                      <BsSearch />
                    </SearchButton>
                  </div>
                  {this.renderHomeApiSwitch(darkTheme)}
                </RightColumn>
              </div>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
