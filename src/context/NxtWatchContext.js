import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  switchTheme: () => {},
  savedVideosList: [],
  addToSaveVideos: () => {},
})

export default NxtWatchContext
