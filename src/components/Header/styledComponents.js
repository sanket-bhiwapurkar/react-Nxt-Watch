import styled from 'styled-components'

export const NavBar = styled.nav`
  padding: 12px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: ${props => (props.darkTheme ? '#212121 ' : '#f8fafc ')};
  width: 100%;
  top: 0;
`

export const Logo = styled.img`
  margin-right: auto;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  align-self: ${props => (props.align === 'left' ? 'flex-start' : 'center')};
`
export const HeaderButton = styled.button`
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  height: 25px;
  margin: 0px 4px;
  border: 0px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ThemeButton = styled(HeaderButton)`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ProfileButton = styled(HeaderButton)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
`

export const LogoutButtonDesktop = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  padding: 0px 12px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  font-weight: 500;
  height: 25px;
  margin: 0px 4px;
  outline: none;
  cursor: pointer;
`
export const Menu = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818 ' : '#f9f9f9 ')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
export const CloseButton = styled.button`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  padding: 20px;
`
export const MenuList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  margin: auto 0px;
  width: 100%;
`
export const MenuItem = styled.li`
  background-color: ${props => {
    if (props.darkTheme) {
      return props.isActive ? '#424242' : 'transparent'
    }
    return props.isActive ? '#cbd5e1' : 'transparent'
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const MenuItemLabel = styled.p`
  width: 110px;
  text-decoration: none;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const PopupWindow = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818 ' : '#f9f9f9 ')};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`
export const PopupMessage = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const CancelButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  margin: 0px 12px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  border: 1px solid ${props => (props.darkTheme ? '#475569' : '#cbd5e1')};
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  outline: none;
  cursor: pointer;
`
export const LogoutButton = styled(CancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
`
