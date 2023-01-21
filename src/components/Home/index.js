import {Redirect, Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsX} from 'react-icons/bs'

import Header from '../Header'
import VideoItem from '../VideoItem'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  HomeContainer,
  HomeRightContainer,
  PremiumBannerContainer,
  PremiumSubContainer,
  AppLogo,
  PremiumDescription,
  PremiumButton,
  //   BannerImage,
  VideoItemContainerList,
  VideoItemContainer,
  SearchBar,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  RetryButton,
  SearchBarContainer,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultTitle,
  NoSearchResultDes,
  CloseButton,
  SearchButton,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const tabId = 0

class Home extends Component {
  state = {
    searchInput: '',
    videoItemsList: [],
    apiStatus: apiStatusConstant.initial,
    showPremiumBanner: true,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videoItemsList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  onClickSearch = () => {
    const {videoItemsList, searchInput} = this.state

    const searchResults = videoItemsList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    this.setState({videoItemsList: searchResults}, this.getAllVideos)
  }

  successView = () => {
    const {videoItemsList} = this.state
    const videoCount = videoItemsList.length === 0
    return (
      <VideoItemContainerList>
        {videoItemsList.map(eachItem => (
          <VideoItem eachItem={eachItem} key={eachItem.id} />
        ))}
        {videoCount && (
          <NoSearchResultContainer>
            <NoSearchResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultTitle>No Search results found</NoSearchResultTitle>
            <NoSearchResultDes>
              Try different key words or remove search filter.
            </NoSearchResultDes>
            <RetryButton onClick={this.getAllVideos}>Retry</RetryButton>
          </NoSearchResultContainer>
        )}
      </VideoItemContainerList>
    )
  }

  failureView = isDarkMode => {
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
        <RetryButton onClick={this.getAllVideos}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderPages = () => {
    const {apiStatus, isDarkMode} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.loadingView()
      case apiStatusConstant.failure:
        return this.failureView(isDarkMode)
      case apiStatusConstant.success:
        return this.successView()

      default:
        return null
    }
  }

  onClickCross = () => {
    this.setState({showPremiumBanner: false})
  }

  renderPremiumBanner = () => {
    const {showPremiumBanner} = this.state

    return (
      <>
        {showPremiumBanner && (
          <PremiumBannerContainer data-testid="banner">
            <PremiumSubContainer>
              <AppLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <PremiumDescription>
                Buy Nxt Watch Premium prepaid plans with UPI
              </PremiumDescription>
              <PremiumButton>GET IT NOW</PremiumButton>
            </PremiumSubContainer>
            {/* <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
              alt="Banner Background image"
            /> */}
            <CloseButton data-testid="close" onClick={this.onClickCross}>
              <BsX className="cross" />
            </CloseButton>
          </PremiumBannerContainer>
        )}
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const searchDarkThemeStyle = isDarkMode
            ? 'search-icon-dark-theme'
            : ''
          return (
            <>
              <Header />
              <HomeContainer>
                <SideBar tabId={tabId} />
                <HomeRightContainer data-testid="home" theme={isDarkMode}>
                  {this.renderPremiumBanner()}
                  <VideoItemContainer theme={isDarkMode}>
                    <SearchBarContainer>
                      <SearchBar
                        type="search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        theme={isDarkMode}
                        placeholder="Search"
                      />
                      <SearchButton
                        onClick={this.onClickSearch}
                        data-testid="searchButton"
                        type="button"
                      >
                        <AiOutlineSearch
                          className={`search-icon ${searchDarkThemeStyle}`}
                        />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.renderPages()}
                  </VideoItemContainer>
                </HomeRightContainer>
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
