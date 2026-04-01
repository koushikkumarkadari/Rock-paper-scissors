import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeActiveTheme: () => {},
  savedVids: [],
  saveVid: () => {},
  unsaveVid: () => {},
})
export default ThemeContext
