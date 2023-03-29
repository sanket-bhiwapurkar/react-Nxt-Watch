import react from 'react'

const RouteContext = react.createContext({
  routeList: [
    {tabId: 'HOME', tabDisplayText: 'Home'},
    {tabId: 'TRENDING', tabDisplayText: 'Trending'},
    {tabId: 'GAMING', tabDisplayText: 'Gaming'},
    {tabId: 'SAVED_VIDEOS', tabDisplayText: 'Saved videos'},
  ],
})
export default RouteContext
