import {Component} from 'react'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {MdClose, MdPlaylistAdd} from 'react-icons/md'
import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import RouteContext from '../../context/RouteContext'

import {
  NavBar,
  Logo,
  ThemeButton,
  HeaderButton,
  ProfileButton,
  LogoutButtonDesktop,
  Menu,
  CloseButton,
  MenuList,
  MenuItem,
  MenuItemLabel,
  PopupWindow,
  PopupMessage,
  CancelButton,
  LogoutButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Header extends Component {
  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  logoutPopupWindow = (darkTheme, close) => (
    <PopupWindow darkTheme={darkTheme}>
      <CloseButton
        darkTheme={darkTheme}
        onClick={() => close()}
        style={{padding: '0px'}}
      >
        <MdClose size={25} />
      </CloseButton>
      <PopupMessage darkTheme={darkTheme}>
        Are you sure, you want to logout
      </PopupMessage>
      <div>
        <CancelButton
          darkTheme={darkTheme}
          type="button"
          onClick={() => close()}
        >
          Cancel
        </CancelButton>
        <LogoutButton darkTheme={darkTheme} type="button" onClick={this.logout}>
          Confirm
        </LogoutButton>
      </div>
    </PopupWindow>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, ToggleTheme} = value
          const logoImg = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <NavBar darkTheme={darkTheme}>
              <Link to="/" style={{marginRight: 'auto'}}>
                <Logo align="left" src={logoImg} alt="website logo" />
              </Link>

              <ThemeButton
                darkTheme={darkTheme}
                type="button"
                onClick={ToggleTheme}
                data-testid="theme"
              >
                {darkTheme ? (
                  <BsBrightnessHigh size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </ThemeButton>
              <Popup
                modal
                trigger={
                  <HeaderButton darkTheme={darkTheme} type="button">
                    <GiHamburgerMenu size={25} />
                  </HeaderButton>
                }
                className="popup-content"
              >
                {close => (
                  <RouteContext.Consumer>
                    {routeValue => {
                      const {activeRouteId, highlightOnClick} = routeValue
                      console.log(highlightOnClick)
                      return (
                        <Menu darkTheme={darkTheme}>
                          <CloseButton
                            darkTheme={darkTheme}
                            onClick={() => close()}
                          >
                            <MdClose size={25} />
                          </CloseButton>
                          <MenuList>
                            <MenuItem
                              id="home"
                              key="home"
                              isActive={activeRouteId === 'home'}
                              onClick={highlightOnClick}
                              darkTheme={darkTheme}
                            >
                              <Link to="/" className="menu-link">
                                <HiHome
                                  style={{
                                    marginRight: '24px',
                                    color: '#ff0000',
                                  }}
                                />
                                <MenuItemLabel darkTheme={darkTheme}>
                                  Home
                                </MenuItemLabel>
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
                                  style={{
                                    marginRight: '24px',
                                    color: '#ff0000',
                                  }}
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
                                  style={{
                                    marginRight: '24px',
                                    color: '#ff0000',
                                  }}
                                />
                                <MenuItemLabel darkTheme={darkTheme}>
                                  Gaming
                                </MenuItemLabel>
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
                                  style={{
                                    marginRight: '24px',
                                    color: '#ff0000',
                                  }}
                                />
                                <MenuItemLabel darkTheme={darkTheme}>
                                  Saved videos
                                </MenuItemLabel>
                              </Link>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      )
                    }}
                  </RouteContext.Consumer>
                )}
              </Popup>

              <ProfileButton type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  style={{width: '25px'}}
                />
              </ProfileButton>

              <Popup
                modal
                trigger={
                  <HeaderButton darkTheme={darkTheme} type="button">
                    <FiLogOut size={25} />
                  </HeaderButton>
                }
                position="center"
              >
                {close => this.logoutPopupWindow(darkTheme, close)}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutButtonDesktop darkTheme={darkTheme} type="button">
                    Logout
                  </LogoutButtonDesktop>
                }
                position="center"
              >
                {close => this.logoutPopupWindow(darkTheme, close)}
              </Popup>
            </NavBar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
