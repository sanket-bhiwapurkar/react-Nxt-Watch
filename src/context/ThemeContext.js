import react from 'react'

const ThemeContext = react.createContext({
  darkTheme: false,
  ToggleTheme: () => {},
  savedVideos: [],
  saveVideo: () => {},
})
export default ThemeContext
