import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

import './index.css'

import {
  HomeContainer,
  RightSideContainer,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  RetryButton,
  LoaderContainer,
  VideoItemDetailContainer,
  Title,
  MidContainer,
  ViewAndTimeText,
  CustomButton,
  IconsList,
  IconListItem,
  BottomContainer,
  VideoDescriptionText,
  Logo,
  TextContainer,
  Text,
} from './styledComponents'

const apiUrlStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetailList: [],
    apiStatus: apiUrlStatusConstant.initial,
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiUrlStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const videoItemData = await response.json()
      const formattedVideoData = {
        channel: videoItemData.video_details.channel,
        description: videoItemData.video_details.description,
        id: videoItemData.video_details.id,
        publishedAt: videoItemData.video_details.published_at,
        thumbnailUrl: videoItemData.video_details.thumbnail_url,
        viewCount: videoItemData.video_details.view_count,
        title: videoItemData.video_details.title,
        name: videoItemData.video_details.channel.name,
        videoUrl: videoItemData.video_details.video_url,
      }
      this.setState({
        videoDetailList: formattedVideoData,
        apiStatus: apiUrlStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiUrlStatusConstant.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailure = isDarkMode => {
    const failureImage =
      isDarkMode === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewContainer>
        <FailureImage src={failureImage} alt="failure view" />
        <FailureTitle>Oops! Something Went Wrong</FailureTitle>
        <FailureDescription>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <FailureDescription>Please try again!</FailureDescription>
        <RetryButton onClick={this.getVideoDetails}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccess = (isDarkMode, addToSaveVideos, savedVideosList) => {
    const {videoDetailList, isLike, isDisLike} = this.state
    const timeDifference = formatDistanceToNow(
      new Date(videoDetailList.publishedAt),
    )

    const {videoUrl, title} = videoDetailList
    const titleColor = isDarkMode ? '#ffffff' : '#212121'
    const textColor = isDarkMode ? '#94a3b8' : '#64748b'
    const descriptionColor = isDarkMode ? '#ffffff' : '#616e7c'

    let LikeColor = ''
    if (isLike) {
      LikeColor = '#2563eb'
    } else {
      LikeColor = isDarkMode ? '#94a3b8' : '#64748b'
    }

    const onClickLike = () => {
      if (isDisLike === true) {
        this.setState(prevState => ({
          isLike: !prevState.isLike,
          isDisLike: false,
        }))
      } else {
        this.setState(prevState => ({isLike: !prevState.isLike}))
      }
    }

    let DislikeColor = ''
    if (isDisLike) {
      DislikeColor = '#2563eb'
    } else {
      DislikeColor = isDarkMode ? '#94a3b8' : '#64748b'
    }

    const onClickDisLike = () => {
      if (isLike === true) {
        this.setState(prevState => ({
          isLike: false,
          isDisLike: !prevState.isDisLike,
        }))
      } else {
        this.setState(prevState => ({isDisLike: !prevState.isDisLike}))
      }
    }

    const isSaved =
      savedVideosList.filter(eachVideo => eachVideo.id === videoDetailList.id)
        .length !== 0

    const buttonSaveText = isSaved ? 'Saved' : 'Save'
    const savedColor = isSaved ? '#2563eb' : '#64748b'

    const onClickSave = () => {
      addToSaveVideos(videoDetailList)
    }

    return (
      <VideoItemDetailContainer>
        <ReactPlayer url={videoUrl} width={1050} height={600} controls />
        <Title color={titleColor}>{title}</Title>
        <MidContainer color={titleColor}>
          <ViewAndTimeText color={textColor}>
            {videoDetailList.viewCount} views . {timeDifference} ago
          </ViewAndTimeText>
          <IconsList>
            <IconListItem onClick={onClickLike}>
              <AiOutlineLike className="icons" color={LikeColor} />
              <CustomButton color={LikeColor} type="button">
                Like
              </CustomButton>
            </IconListItem>
            <IconListItem onClick={onClickDisLike}>
              <AiOutlineDislike className="icons" color={DislikeColor} />
              <CustomButton color={DislikeColor} type="button">
                Dislike
              </CustomButton>
            </IconListItem>
            <IconListItem onClick={onClickSave}>
              <MdPlaylistAdd className="icons" color={savedColor} />
              <CustomButton type="button" color={savedColor}>
                {buttonSaveText}
              </CustomButton>
            </IconListItem>
          </IconsList>
        </MidContainer>
        <BottomContainer>
          <Logo
            src={videoDetailList.channel.profile_image_url}
            alt="channel logo"
          />
          <TextContainer>
            <Text color={titleColor}>{videoDetailList.channel.name}</Text>
            <Text color={textColor}>
              {videoDetailList.channel.subscriber_count} subscribers
            </Text>
          </TextContainer>
        </BottomContainer>
        <VideoDescriptionText
          marginTop={40}
          marginLeft={63}
          color={descriptionColor}
        >
          {videoDetailList.description}
        </VideoDescriptionText>
      </VideoItemDetailContainer>
    )
  }

  renderApiData = (isDarkMode, addToSaveVideos, savedVideosList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiUrlStatusConstant.success:
        return this.renderSuccess(isDarkMode, addToSaveVideos, savedVideosList)
      case apiUrlStatusConstant.failure:
        return this.renderFailure(isDarkMode)
      case apiUrlStatusConstant.inProgress:
        return this.renderLoader(isDarkMode)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, addToSaveVideos, savedVideosList} = value
          const backgroundColor = isDarkMode ? '#0f0f0f' : ' #f4f4f4'
          return (
            <>
              <Header />

              <HomeContainer alignItem="flex-start">
                <SideBar />
                <RightSideContainer
                  data-testid="videoItemDetails"
                  bgColor={backgroundColor}
                >
                  {this.renderApiData(
                    isDarkMode,
                    addToSaveVideos,
                    savedVideosList,
                  )}
                </RightSideContainer>
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetails
