import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
`
export const TrendingVideosRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 95vh;
  flex-grow: 1;
  //   overflow-y: scroll;
  width: 83%;
  margin-left: 17%;
  background-color: ${props => props.bgColor};
`
export const TrendingVideosTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const TrendingVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const VideosListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
  cursor: pointer;
`
export const ThumbnailImage = styled.img`
  height: 180px;
  width: 300px;
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  height: 200px;
`
export const VideoItemTitle = styled.p`
  font-size: 22px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 600;
  margin-top: 0px;
`
export const ChannelName = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1;
  line-height: 0.5;
  margin-top: 0px;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  margin-top: 0px;
`
export const ViewsCount = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 0.5;
  margin-top: 0px;
`
export const PublishedAt = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 0.5;
  margin-top: 0px;
`
export const ParaEle = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #1e293b;
  line-height: 1;
  margin-top: 0px;
`
export const TrendingTitle = styled.h1`
  font-size: 25px;
  margin-left: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 600;
  line-height: 1;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 10px;
`
export const FailureImage = styled.img`
  height: 250px;
  width: 300px;
`
export const FailureTitle = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #0f0f0f;
  font-weight: 500;
`
export const FailureDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  line-height: 1;
`
export const RetryButton = styled.button`
  font-size: 15x;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  padding: 8px;
  width: 100px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #4f46e5;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 85vh;
`
