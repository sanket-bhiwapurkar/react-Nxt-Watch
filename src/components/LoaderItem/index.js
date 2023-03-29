import './index.css'
import Loader from 'react-loader-spinner'

const LoaderItem = props => {
  const {darkTheme} = props
  const loaderColor = darkTheme ? '#ffffff' : '#4f46e5'
  return (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
    </div>
  )
}
export default LoaderItem
