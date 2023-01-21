import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 95vh;
  margin-top: 5vh;
  //   width: 100%;
`

export const HomeRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 83%;
  height: 100%;
  flex-grow: 1;
  margin-left: 17%;
  background-color: ${props => (props.theme === true ? '#181818' : '#ffffff')};
`
export const PremiumBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 0px;
  height: 230px;
  width: 95%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-color: #ffffff;
`
export const PremiumSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  padding: 20px;
  width: 350px;
`
export const AppLogo = styled.img`
  height: 40px;
  width: 200px;
`
export const PremiumDescription = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #1e293b;
`
export const PremiumButton = styled.button`
  font-size: 15px;
  font-family: 'Roboto';
  color: #1e293b;
  border-radius: 3px;
  font-weight: 500;
  border: 1px solid #1e293b;
  background-color: #ffffff;
  cursor: pointer;
  width: 110px;
  padding: 7px;
`
export const BannerImage = styled.img`
  height: 230px;
  width: 800px;
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  background-color: #f4f4f4;
  padding-left: 0px;
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  min-height: 100%;
`
export const VideoItemContainerList = styled.ul`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 10px;
  min-height: 100%;
`
export const SearchBar = styled.input`
  font-size: 15px;
  height: 35px;
  font-family: 'Roboto';
  color: #606060;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-weight: 400;
  border: 1px solid #606060;
  width: 300px;
  padding-left: 10px;
  margin: 20px;
  outline: none;
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  margin-right: 0px;
  align-self: flex-start;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 10px;
  width: 95%;
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
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100%;
  align-self: center;
  padding: 10px;
`
export const NoSearchResultImage = styled.img`
  height: 250px;
  width: 300px;
`
export const NoSearchResultTitle = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #0f0f0f;
  font-weight: 500;
`

export const NoSearchResultDes = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  line-height: 1;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-top: 4px;
  outline: none;
  cursor: pointer;
`
