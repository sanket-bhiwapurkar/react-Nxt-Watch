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
