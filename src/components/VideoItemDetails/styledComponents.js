import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 95vh;
  margin-top: 5vh;
  width: 100%;
`
export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  padding: 20px;
  height: 100%;
  margin-left: 17%;
  width: 83%;
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
  margin-left: 50%;
`
export const VideoItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
`
export const Title = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  border-bottom: 1px solid ${props => props.color};
`
export const IconsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
  padding-left: 0px;
  list-style: none;
`
export const ViewAndTimeText = styled.p`
color: ${props => props.color}
font-size:20x;
font-family: "Roboto";
`
export const CustomButton = styled.button`
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 15px;
`
export const VideoDescriptionText = styled.p`
  font-size: 20x;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`
export const Text = styled.p`
  font-size: 20x;
  line-height: 0.5;
  font-family: 'Roboto';
  margin-top: 0px;
  color: ${props => props.color};
`
export const IconListItem = styled.li`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
`
