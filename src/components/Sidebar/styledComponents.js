import styled from 'styled-components'

export const SidebarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  width: 21vw;
  height: 90vh;
  flex-grow: 1;
  position: fixed;
  margin-top: 60px;
  background-color: ${props => (props.darkTheme ? '#212121 ' : '#f8fafc ')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const MenuList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
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
