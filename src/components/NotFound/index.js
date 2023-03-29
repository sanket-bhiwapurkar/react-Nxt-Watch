import './index.css'
import {
  HomeContainer,
  RightColumn,
  NoSearchHeading,
  NoSearchMsg,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const failureImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <HomeContainer darkTheme={darkTheme}>
          <Header />
          <div className="home-body">
            <Sidebar darkTheme={darkTheme} />
            <RightColumn>
              <img src={failureImg} alt="not found" className="not-found-img" />
              <NoSearchHeading darkTheme={darkTheme}>
                Page Not Found
              </NoSearchHeading>
              <NoSearchMsg darkTheme={darkTheme}>
                we are sorry, the page you requested could not be found.
              </NoSearchMsg>
            </RightColumn>
          </div>
        </HomeContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
