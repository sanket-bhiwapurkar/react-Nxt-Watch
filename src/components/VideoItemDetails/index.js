import {Component} from 'react'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Failure from '../Failure'
import LoaderItem from '../LoaderItem'
import './index.css'
import {
  VIdeoDetailsContainer,
  RightColumn,
  DetailsHeading,
  StatsAndButtonsContainer,
  ReactButtonLike,
  ReactButtonDislike,
  ReactButtonSave,
  ChannelName,
  ChannelDescription,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

const apiStatusOptions = {
  initial: 'INITIAL',
  isLoading: 'IS_LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    videoDetailsApiStatus: apiStatusOptions.initial,
    userReaction: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    await this.setState({videoDetailsApiStatus: apiStatusOptions.isLoading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          channelName: data.video_details.channel.name,
          channelProfileImageUrl: data.video_details.channel.profile_image_url,
          channelSubscriberCount: data.video_details.channel.subscriber_count,
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }
      const {videoDetails} = formattedData
      this.setState({
        videoDetails,
        videoDetailsApiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({videoDetailsApiStatus: apiStatusOptions.failure})
    }
  }

  renderVideoDetailsApiSwitch = (darkTheme, saveVideo, savedVideos) => {
    const {videoDetailsApiStatus, videoDetails, userReaction} = this.state

    const index = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    switch (videoDetailsApiStatus) {
      case apiStatusOptions.isLoading:
        return <LoaderItem darkTheme={darkTheme} />
      case apiStatusOptions.success: {
        const {
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        return (
          <RightColumn>
            <div className="player-container">
              <ReactPlayer
                url={videoUrl}
                // light={thumbnailUrl}
                controls
                width="100%"
                height="100%"
              />
            </div>
            <DetailsHeading
              as="p"
              darkTheme={darkTheme}
              className="DetailsHeading"
            >
              {title}
            </DetailsHeading>
            <StatsAndButtonsContainer
              darkTheme={darkTheme}
              className="StatsAndButtonsContainer"
            >
              <div className="StatsContainer">
                <p>{viewCount} views</p>
                <BsDot size={20} />
                <p>{formatDistanceToNow(new Date(publishedAt))}</p>
              </div>
              <div className="ButtonContainer">
                <ReactButtonLike
                  darkTheme={darkTheme}
                  type="button"
                  className="ReactButton"
                  color={userReaction === 'LIKE' ? '#2563eb' : '#64748b'}
                  onClick={this.onLike}
                >
                  <AiOutlineLike size={20} />
                  <p className="ReactButtonText">Like</p>
                </ReactButtonLike>
                <ReactButtonDislike
                  darkTheme={darkTheme}
                  type="button"
                  className="ReactButton"
                  color={userReaction === 'DISLIKE' ? '#2563eb' : '#64748b'}
                  onClick={this.onDislike}
                >
                  <AiOutlineDislike size={20} />
                  <p className="ReactButtonText">Dislike</p>
                </ReactButtonDislike>
                <ReactButtonSave
                  darkTheme={darkTheme}
                  type="button"
                  className="ReactButton"
                  color={index !== -1 ? '#2563eb' : '#64748b'}
                  onClick={() => this.onSave(videoDetails, saveVideo)}
                >
                  <BiListPlus size={20} />
                  <p className="ReactButtonText">
                    {index !== -1 ? 'Saved' : 'save'}
                  </p>
                </ReactButtonSave>
              </div>
            </StatsAndButtonsContainer>

            <hr />

            <div className="DescriptionContainer">
              <div className="ChannelInfoContainer">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  style={{width: '50px', marginRight: '12px'}}
                />
                <div>
                  <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
                  <ChannelDescription darkTheme={darkTheme}>
                    {subscriberCount} subscribers
                  </ChannelDescription>
                </div>
              </div>
              <ChannelDescription darkTheme={darkTheme}>
                {description}
              </ChannelDescription>
            </div>
          </RightColumn>
        )
      }
      case apiStatusOptions.failure:
        return <Failure darkTheme={darkTheme} retry={this.getVideoDetails} />
      default:
        return null
    }
  }

  onLike = () => {
    const {userReaction} = this.state
    if (userReaction === '') {
      this.setState({userReaction: 'LIKE'})
    } else if (userReaction === 'LIKE') {
      this.setState({userReaction: ''})
    } else {
      this.setState({userReaction: 'LIKE'})
    }
  }

  onDislike = () => {
    const {userReaction} = this.state
    if (userReaction === '') {
      this.setState({userReaction: 'DISLIKE'})
    } else if (userReaction === 'DISLIKE') {
      this.setState({userReaction: ''})
    } else {
      this.setState({userReaction: 'DISLIKE'})
    }
  }

  onSave = (videoDetails, saveVideo) => {
    saveVideo(videoDetails)
    /* if (savedVideos !== undefined) {
      this.setState({isSaved: savedVideos.includes(videoDetails)})
    } else {
      this.setState({isSaved: false})
    } */
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, saveVideo, savedVideos} = value
          return (
            <VIdeoDetailsContainer
              darkTheme={darkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <div className="home-body">
                <Sidebar darkTheme={darkTheme} />
                {this.renderVideoDetailsApiSwitch(
                  darkTheme,
                  saveVideo,
                  savedVideos,
                )}
              </div>
            </VIdeoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
