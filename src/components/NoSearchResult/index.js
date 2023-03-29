import './index.css'
import {NoSearchHeading, NoSearchMsg} from './styledComponents'

const NoSearchResult = props => {
  const {darkTheme, retry} = props
  return (
    <div className="no-videos-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="no-videos-img"
      />
      <NoSearchHeading as="h1" darkTheme={darkTheme}>
        No Search results found
      </NoSearchHeading>
      <NoSearchMsg darkTheme={darkTheme}>
        Try different key words or remove search filter
      </NoSearchMsg>
      <button type="button" className="retry-btn" onClick={retry}>
        Retry
      </button>
    </div>
  )
}
export default NoSearchResult
