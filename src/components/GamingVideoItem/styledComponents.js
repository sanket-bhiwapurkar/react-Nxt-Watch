import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 49%;
  @media screen and (min-width: 576px) {
    width: 32%;
  }
`
export const VideoItemBody = styled.div`
  padding: 4px;
  text-decoration: none;
`
export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  margin: 0px;
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const VideoCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
`
