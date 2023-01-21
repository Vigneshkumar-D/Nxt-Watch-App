import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkMode: false,
    savedVideosList: [],
  }

  switchTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addToSaveVideos = videoItem => {
    const {savedVideosList} = this.state
    const {id} = videoItem
    const isPresent = savedVideosList.filter(eachVideo => eachVideo.id === id)

    if (isPresent.length === 0) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
      }))
    } else {
      const updatedData = savedVideosList.filter(
        eachVideo => eachVideo.id !== videoItem.id,
      )
      console.log('updatedData', updatedData)
      this.setState({savedVideosList: updatedData})
    }
  }

  render() {
    const {isDarkMode, savedVideosList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          switchTheme: this.switchTheme,
          savedVideosList,
          addToSaveVideos: this.addToSaveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
