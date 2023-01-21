import {Link} from 'react-router-dom'

import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundRightContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDes,
} from './styledComponents'

const LIGHT_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const DARK_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const imageUrl = isDarkMode ? DARK_IMAGE : LIGHT_IMAGE
      const backgroundColor = isDarkMode ? '#0f0f0f' : '#f1f1f1'
      const textColor = isDarkMode ? '#ffffff' : '#212121'
      const desColor = isDarkMode ? '#cbd5e1' : '#1e293b'

      return (
        <>
          <Header />
          <NotFoundContainer>
            <SideBar />
            <NotFoundRightContainer bgColor={backgroundColor}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundTitle titleColor={textColor}>
                Page Not Found
              </NotFoundTitle>
              <NotFoundDes desColor={desColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundDes>
            </NotFoundRightContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
