import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  TrendingVideosContainer,
  TrendingVideosRightContainer,
  TrendingVideosTopContainer,
  TrendingTitle,
  TrendingVideosList,
  VideosListItem,
  ThumbnailImage,
  VideoItemDetailsContainer,
  VideoItemTitle,
  ChannelName,
  ViewsAndTimeContainer,
  ViewsCount,
  PublishedAt,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatsConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const tabId = 1

class Trending extends Component {
  state = {apiStatus: apiStatsConstant.initial, trendingVideoList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatsConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedDate = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingVideoList: formattedDate,
        apiStatus: apiStatsConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatsConstant.failure})
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
        <FailureDescription>Please try again!</FailureDescription>
        <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = isDarkMode => {
    const backgroundColor = isDarkMode ? '#0f0f0f' : '#f1f1f1'
    const textColor = isDarkMode ? '#ffffff' : '#212121'
    const desColor = isDarkMode ? '#cbd5e1' : '#1e293b'
    const darkTheme = isDarkMode ? 'dark-theme-background' : ''
    const {trendingVideoList} = this.state
    return (
      <>
        <TrendingVideosTopContainer bgColor={backgroundColor}>
          <HiFire className={`hi-fire ${darkTheme}`} />
          <TrendingTitle color={textColor}>Trending</TrendingTitle>
        </TrendingVideosTopContainer>

        <TrendingVideosList>
          {trendingVideoList.map(eachVideo => (
            <Link
              to={`/videos/${eachVideo.id}`}
              key={eachVideo.id}
              className="link-item"
            >
              <VideosListItem key={eachVideo.id}>
                <ThumbnailImage
                  src={eachVideo.thumbnailUrl}
                  alt="video thumbnail"
                />
                <VideoItemDetailsContainer>
                  <VideoItemTitle color={textColor}>
                    {eachVideo.title}
                  </VideoItemTitle>
                  <ChannelName color={desColor}>
                    {eachVideo.channelName}
                  </ChannelName>
                  <ViewsAndTimeContainer>
                    <ViewsCount color={desColor}>
                      {eachVideo.viewCount} views
                    </ViewsCount>
                    <PublishedAt color={desColor}>
                      {formatDistanceToNow(new Date(eachVideo.publishedAt))}
                      ago
                    </PublishedAt>
                  </ViewsAndTimeContainer>
                </VideoItemDetailsContainer>
              </VideosListItem>
            </Link>
          ))}
        </TrendingVideosList>
      </>
    )
  }

  renderTrendingVideos = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatsConstant.inProgress:
        return this.renderLoadingView()
      case apiStatsConstant.success:
        return this.renderSuccessView(isDarkMode)
      case apiStatsConstant.failure:
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
              <TrendingVideosContainer>
                <SideBar tabId={tabId} />
                <TrendingVideosRightContainer
                  data-testid="trending"
                  bgColor={backgroundColor}
                >
                  {this.renderTrendingVideos(isDarkMode)}
                </TrendingVideosRightContainer>
              </TrendingVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Trending
