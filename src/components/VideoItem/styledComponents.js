import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    ${props =>
      props.route === 'Home' && {
        width: '50%',
      }}
  }
  @media screen and (min-width: 768px) {
    ${props =>
      props.route === 'Home' && {
        width: '33%',
      }}
  }
`
export const VideoItemBody = styled.div`
  width: 100%;
  margin: 0px;
  @media screen and (min-width: 576px) {
    padding: 4px;
    ${props =>
      props.route !== 'Home' && {
        display: 'flex',
        alignItems: 'flex-start',
      }}
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    ${props =>
      props.route !== 'Home' && {
        maxWidth: '350px',
      }}
  }
`
export const VideoInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 16px;
`
export const ChannelIcon = styled.img`
  width: 35px;
  display: flex;
  @media screen and (min-width: 576px) {
    ${props =>
      props.route !== 'Home' && {
        display: 'none',
      }}
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  margin: 0px;
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const VideoStatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};

`
export const ChannelNameMobile = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  @media screen and (min-width: 576px) {
    ${props =>
      props.route !== 'Home' && {
        display: 'none',
      }}
  }
`
export const ChannelNameDesktop = styled.p`
  display: none;
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  @media screen and (min-width: 576px) {
    ${props =>
      props.route !== 'Home' && {
        display: 'flex',
      }}
  }
`
export const DotBox = styled.div`
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    ${props =>
      props.route !== 'Home' && {
        display: 'none',
      }}
  }
`
