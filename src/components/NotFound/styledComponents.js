import styled from 'styled-components'

export const NoSearchHeading = styled.h1`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const NoSearchMsg = styled.p`
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  font-weight: normal;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
`
export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818 ' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
`
export const RightColumn = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 79vw;
    margin-left: 21vw;
  }
`
