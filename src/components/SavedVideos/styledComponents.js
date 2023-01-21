import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 95vh;
  margin-top: 5vh;
`
export const SavedVideosRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 83%;
  margin-left: 17%;
  background-color: ${props => props.bgColor};
`
export const SavedVideosTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const SavedTitle = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 600;
  line-height: 1;
  margin-left: 15px;
`
export const SavedVideosList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  width: 95%;
  cursor: pointer;
`
export const VideoListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 15px;
  width: 100%;
`
export const SavedVideosImage = styled.img`
  height: 200px;
  width: 300px;
`
export const SavedVideosDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 600;
  line-height: 1;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewCount = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 0.5;
  margin-top: 0px;
  font-weight: 500;
`
export const ChannelName = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 0.5;
  margin-top: 0px;
  font-weight: 500;
`
export const PublishedAt = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 0.5;
  margin-top: 0px;
  font-weight: 500;
  margin-left: 8px;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSavedVideosImage = styled.img`
  height: 400px;
  width: 480px;
`
export const NoSavedVideosTitle = styled.h1`
  font-size: 23px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 15px;
  color: ${props => props.color};
`
export const NoSavedVideosDes = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 500;
  color: ${props => props.color};
`
export const SavedVideosSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  width: 100%;
  height: 95vh;
`
