import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95vh;
  margin-top: 5vh;
`
export const GamingRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  width: 83%;
  margin-left: 17%;
  min-height: 95vh;
  flex-grow: 1;
  overflow-y: scroll;
  background-color: ${props => props.bgColor};
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
export const GamingVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
export const GamingVideoTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const GameTitle = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 600;
  line-height: 1;
  margin-left: 15px;
`
export const GamesVideoList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  width: 95%;
  cursor: pointer;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
`
export const GameThumbnailImage = styled.img`
  height: 350px;
  width: 270px;
`

export const ListGameTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 600;
  line-height: 1;
`
export const ViewCount = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 0.5;
  margin-top: 0px;
  font-weight: 500;
`
