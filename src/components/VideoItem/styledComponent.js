import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 330px;
  height: 350px;
  margin: 15px;
  cursor: pointer;
`
export const VideoThumbnail = styled.img`
  height: 180px;
  width: 330px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 15px;
`
export const VideoDetailsDesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoTitle = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: #313131;
`
export const ChannelName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: #424242;
  line-height: 0.5;
  margin-top: 0px;
`
export const ViewCountAndPublishedDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
`

export const ViewCount = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: #424242;
  margin-right: 20px;
  list-style-type: none;
`
export const PublishedDate = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: #424242;
  list-style-type: disc;
`
