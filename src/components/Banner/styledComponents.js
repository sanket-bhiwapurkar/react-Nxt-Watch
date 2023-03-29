import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #f9f9f9;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  font-family: 'Roboto';
`

export const Logo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  align-self: ${props => (props.align === 'left' ? 'flex-start' : 'center')};
`
