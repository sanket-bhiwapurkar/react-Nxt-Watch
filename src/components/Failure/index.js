import './index.css'
import {NoSearchHeading, NoSearchMsg} from './styledComponents'

const Failure = props => {
  const {darkTheme, retry} = props
  const failureImg = darkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  return (
    <div className="no-videos-container">
      <img src={failureImg} alt="failure view" className="failure-img" />
      <NoSearchHeading darkTheme={darkTheme}>
        Oops! Something Went Wrong
      </NoSearchHeading>
      <NoSearchMsg darkTheme={darkTheme}>
        We are having some trouble to complete your request. Please try again.
      </NoSearchMsg>
      <button type="button" className="retry-btn" onClick={() => retry()}>
        Retry
      </button>
    </div>
  )
}
export default Failure
