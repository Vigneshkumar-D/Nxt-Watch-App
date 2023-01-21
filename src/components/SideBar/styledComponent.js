import styled from 'styled-components'

export const HomeLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17%;
  height: 95vh;
  //   margin-top: 5vh;
  position: fixed;
  //   padding: 20px;
  padding-left: 0px;
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
`
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 170px;
  justify-content: space-between;
  padding-left: 0px;
`
export const ListItem = styled.li`
  font-size: 15px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const ListItemTitle = styled.p`
  margin-left: 20px;
  font-weight: ${props => props.fontWeight};
  color: ${props => (props.isDark === true ? '#ffffff' : '#383838')};
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  width: 100%;
  padding: 15px;
`
export const ContactUsTitle = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => props.color};
`
export const SocialMediaImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`
export const CustomImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
  cursor: pointer;
`
export const ContactUsDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
`
