import styled from 'styled-components'

export const VIdeoDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f  ' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
`
export const RightColumn = styled.div`
  font-family: 'Roboto';
  width: 100%;
  margin-top: 60px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 79vw;
    margin-left: 21vw;
  }
`
export const DetailsHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff ' : '#000000 ')};
`
export const StatsAndButtonsContainer = styled.div`
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
`
export const ReactButtonLike = styled.button`
  color: ${props => props.color};
`
export const ReactButtonDislike = styled.button`
  color: ${props => props.color};
`
export const ReactButtonSave = styled.button`
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
`
export const ChannelName = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff ' : '#000000 ')};
`
