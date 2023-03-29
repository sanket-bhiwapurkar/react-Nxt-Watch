import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {
  SidebarContainer,
  MenuList,
  MenuItem,
  MenuItemLabel,
} from './styledComponents'
import './index.css'
import RouteContext from '../../context/RouteContext'

/* const tabList = [
  {tabId: 'HOME', tabDisplayText: 'Home', tabActive: false},
  {tabId: 'TRENDING', tabDisplayText: 'Trending'},
  {tabId: 'GAMING', tabDisplayText: 'Gaming'},
  {tabId: 'SAVED_VIDEOS', tabDisplayText: 'Saved videos'},
] */

class Sidebar extends Component {
  render() {
    const {darkTheme} = this.props
    return (
      <SidebarContainer darkTheme={darkTheme}>
        <RouteContext.Consumer>
          {value => {
            const {activeRouteId, highlightOnClick} = value
            return (
              <MenuList>
                <MenuItem
                  id="home"
                  key="home"
                  isActive={activeRouteId === 'home'}
                  onClick={highlightOnClick}
                  darkTheme={darkTheme}
                >
                  <Link to="/" className="menu-link">
                    <HiHome style={{marginRight: '24px', color: '#ff0000'}} />
                    <MenuItemLabel darkTheme={darkTheme}>Home</MenuItemLabel>
                  </Link>
                </MenuItem>

                <MenuItem
                  id="trending"
                  key="trending"
                  onClick={highlightOnClick}
                  isActive={activeRouteId === 'trending'}
                  darkTheme={darkTheme}
                >
                  <Link to="/trending" className="menu-link">
                    <AiFillFire
                      style={{marginRight: '24px', color: '#ff0000'}}
                    />
                    <MenuItemLabel darkTheme={darkTheme}>
                      Trending
                    </MenuItemLabel>
                  </Link>
                </MenuItem>

                <MenuItem
                  id="gaming"
                  key="gaming"
                  onClick={highlightOnClick}
                  isActive={activeRouteId === 'gaming'}
                  darkTheme={darkTheme}
                >
                  <Link to="/gaming" className="menu-link">
                    <SiYoutubegaming
                      style={{marginRight: '24px', color: '#ff0000'}}
                    />
                    <MenuItemLabel darkTheme={darkTheme}>Gaming</MenuItemLabel>
                  </Link>
                </MenuItem>

                <MenuItem
                  id="saved-videos"
                  key="saved-videos"
                  onClick={highlightOnClick}
                  isActive={activeRouteId === 'saved-videos'}
                  darkTheme={darkTheme}
                >
                  <Link to="/saved-videos" className="menu-link">
                    <MdPlaylistAdd
                      style={{marginRight: '24px', color: '#ff0000'}}
                    />
                    <MenuItemLabel darkTheme={darkTheme}>
                      Saved videos
                    </MenuItemLabel>
                  </Link>
                </MenuItem>
              </MenuList>
            )
          }}
        </RouteContext.Consumer>

        <div className="contact-us">
          <p className="contact-us-heading">CONTACT US</p>
          <div className="contact-us-logos">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="contact-icons"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="contact-icons"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="contact-icons"
            />
          </div>
          <p>Enjoy! Now to see your channels and recommendations!</p>
        </div>
      </SidebarContainer>
    )
  }
}
export default Sidebar
