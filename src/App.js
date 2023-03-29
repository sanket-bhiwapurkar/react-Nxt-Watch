import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import RouteContext from './context/RouteContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {darkTheme: false, activeRouteId: '', savedVideos: []}

  highlightOnClick = event => {
    this.setState({activeRouteId: event.currentTarget.id})
  }

  ToggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  saveVideo = videoDetails => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (index !== -1) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          eachVideo => eachVideo.id !== videoDetails.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    }
  }

  render() {
    const {darkTheme, activeRouteId, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          ToggleTheme: this.ToggleTheme,
          savedVideos,
          saveVideo: this.saveVideo,
        }}
      >
        <RouteContext.Provider
          value={{activeRouteId, highlightOnClick: this.highlightOnClick}}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </RouteContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
