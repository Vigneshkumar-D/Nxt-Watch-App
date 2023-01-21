import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  padding-left: 50px;
  padding-right: 50px;
  position: fixed;
  height: 50px;
  width: 100%;
  z-index: 1;
  top: 0;
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
`
export const HeaderAppLogo = styled.img`
  height: 30px;
  width: 120px;
  cursor: pointer;
`
export const HeaderSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`
export const ThemeImage = styled.img`
  height: 30px;
  width: 30px;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const LogoutButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  border: 2px solid
    ${props => (props.buttonTheme === true ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.buttonTheme === true ? '#ffffff' : '#3b82f6')};
  padding: 4px;
  width: 75px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props =>
    props.buttonTheme === true ? '#231f20' : '#ffffff'};
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 350px;
  height: 170px;
  border-radius: 10px;
  background-color: ${props => props.popUpBgColor};
  box-shadow: ${props =>
    props.isDark === true ? '' : '0px 3px 7px 3px #909090'};
`
export const LogoutMessage = styled.p`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.popUpTextColor};
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`
export const CancelButton = styled.button`
  padding: 10px;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  color: ${props => props.cancelBtnColor};
`
export const ConfirmButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #3b82f6;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  color: #ffffff;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
