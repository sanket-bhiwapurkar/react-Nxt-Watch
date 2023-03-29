import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const RightColumn = styled.div`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 79vw;

    margin-left: 21vw;
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  width: 100vw;
  background-color: ${props => (props.darkTheme ? '#0f0f0f  ' : '#ebebeb ')};
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const Heading = styled.h1`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 11px;
  background-color: ${props => (props.darkTheme ? '#000000  ' : '#cbd5e1 ')};
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 35px;
    margin-right: 16px;
  }
`
