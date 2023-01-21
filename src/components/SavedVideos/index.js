import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

import {
  SavedVideosContainer,
  SavedVideosRightContainer,
  SavedVideosTopContainer,
  SavedTitle,
  SavedVideosList,
  VideoListItem,
  SavedVideosImage,
  SavedVideosDetailsContainer,
  VideoTitle,
  ChannelName,
  ViewsAndTimeContainer,
  ViewCount,
  PublishedAt,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosTitle,
  NoSavedVideosDes,
  SavedVideosSubContainer,
} from './styledComponents'

const tabId = 3

const SavedVideos = () => {
  const renderSavedVideos = (savedVideosList, isDarkMode) => {
    const backgroundColor = isDarkMode ? '#0f0f0f' : '#ebebeb'
    const textColor = isDarkMode ? '#ffffff' : '#212121'
    const desColor = isDarkMode ? '#cbd5e1' : '#1e293b'
    const darkTheme = isDarkMode ? 'dark-theme-background' : ''
    const emptyList = savedVideosList.length === 0
    const position = emptyList === true ? 'center' : 'flex-start'
    return (
      <SavedVideosSubContainer justifyContent={position}>
        {emptyList === true ? (
          <NoSavedVideosContainer>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosTitle color={textColor}>
              No saved videos found
            </NoSavedVideosTitle>
            <NoSavedVideosDes color={desColor}>
              You can save your videos while watching them
            </NoSavedVideosDes>
          </NoSavedVideosContainer>
        ) : (
          <>
            <SavedVideosTopContainer bgColor={backgroundColor}>
              <BiListPlus className={`save-icon ${darkTheme}`} />
              <SavedTitle color={textColor}>Saved Videos</SavedTitle>
            </SavedVideosTopContainer>
            <SavedVideosList>
              {savedVideosList.map(eachVideo => (
                <Link
                  to={`/videos/${eachVideo.id}`}
                  key={eachVideo.id}
                  className="link-item"
                >
                  <VideoListItem key={eachVideo.id}>
                    <SavedVideosImage
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <SavedVideosDetailsContainer>
                      <VideoTitle color={textColor}>
                        {eachVideo.title}
                      </VideoTitle>
                      <ChannelName color={desColor}>
                        {eachVideo.name}
                      </ChannelName>
                      <ViewsAndTimeContainer>
                        <ViewCount color={desColor}>
                          {eachVideo.viewCount} views
                        </ViewCount>
                        <PublishedAt color={desColor}>
                          {formatDistanceToNow(new Date(eachVideo.publishedAt))}{' '}
                          ago
                        </PublishedAt>
                      </ViewsAndTimeContainer>
                    </SavedVideosDetailsContainer>
                  </VideoListItem>
                </Link>
              ))}
            </SavedVideosList>
          </>
        )}
      </SavedVideosSubContainer>
    )
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, savedVideosList} = value
        const backgroundColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
        return (
          <>
            <Header />
            <SavedVideosContainer>
              <SideBar tabId={tabId} />
              <SavedVideosRightContainer
                data-testid="savedVideos"
                bgColor={backgroundColor}
              >
                {renderSavedVideos(savedVideosList, isDarkMode)}
              </SavedVideosRightContainer>
            </SavedVideosContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideos
