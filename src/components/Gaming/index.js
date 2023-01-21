import {Component} from 'react'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  GamingContainer,
  GamingRightContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  RetryButton,
  GamingVideoContainer,
  GamingVideoTopContainer,
  GameTitle,
  ListGameTitle,
  GamesVideoList,
  ListItem,
  GameThumbnailImage,
  ViewCount,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const tabId = 2

class Gaming extends Component {
  state = {apiStatus: apiStatusConstant.initial, gameVideoList: []}

  componentDidMount() {
    this.getGameVideos()
  }

  getGameVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gameVideoList: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDarkMode => {
    const failureImage =
      isDarkMode === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewContainer>
        <FailureImage src={failureImage} alt="failure view" />
        <FailureTitle>Oops! Something Went Wrong</FailureTitle>
        <FailureDescription>
          We are having some trouble to complete your request.
        </FailureDescription>
        <FailureDescription>Please try again</FailureDescription>
        <RetryButton onClick={this.getGameVideos}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = isDarkMode => {
    const {gameVideoList} = this.state
    const backgroundColor = isDarkMode ? '#0f0f0f' : '#f1f1f1'
    const textColor = isDarkMode ? '#ffffff' : '#212121'
    const desColor = isDarkMode ? '#cbd5e1' : '#1e293b'
    return (
      <GamingVideoContainer>
        <GamingVideoTopContainer bgColor={backgroundColor}>
          <SiYoutubegaming className="game-icon" />
          <GameTitle color={textColor}>Gaming</GameTitle>
        </GamingVideoTopContainer>
        <GamesVideoList>
          {gameVideoList.map(eachVideo => (
            <Link
              to={`/videos/${eachVideo.id}`}
              key={eachVideo.id}
              className="link-item"
            >
              <ListItem key={eachVideo.id}>
                <GameThumbnailImage
                  src={eachVideo.thumbnailUrl}
                  alt="video thumbnail"
                />
                <ListGameTitle color={textColor}>
                  {eachVideo.title}
                </ListGameTitle>
                <ViewCount color={desColor}>
                  {eachVideo.viewCount} Watching Worldwide
                </ViewCount>
              </ListItem>
            </Link>
          ))}
        </GamesVideoList>
      </GamingVideoContainer>
    )
  }

  renderGamingVideos = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.success:
        return this.renderSuccessView(isDarkMode)
      case apiStatusConstant.failure:
        return this.renderFailureView(isDarkMode)

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const backgroundColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <GamingContainer>
                <SideBar tabId={tabId} />
                <GamingRightContainer
                  data-testid="gaming"
                  bgColor={backgroundColor}
                >
                  {this.renderGamingVideos(isDarkMode)}
                </GamingRightContainer>
              </GamingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
