import {MdClose} from 'react-icons/md'
import {BannerContainer, Logo} from './styledComponents'
import './index.css'

const Banner = () => {
  const close = () => {
    const bannerEl = document.getElementById('banner')
    const homeRightColumn = document.getElementById('homeRightColumn')
    homeRightColumn.removeChild(bannerEl)
    // bannerEl.style.display = 'none'
  }
  return (
    <BannerContainer id="banner" className="banner" data-testid="banner">
      <div className="banner-head">
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <button
          type="button"
          className="banner-close"
          onClick={close}
          data-testid="close"
        >
          <MdClose size={25} />
        </button>
      </div>
      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
      <button className="get-it-now" type="button">
        GET IT NOW
      </button>
    </BannerContainer>
  )
}
export default Banner
