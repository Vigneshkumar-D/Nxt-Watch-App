import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const LoginPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 440px;
  width: 370px;
  border-radius: 5px;
  box-shadow: ${props =>
    props.isDark === true ? '' : '0px 3px 7px 3px #e2e8f0'};
  padding: 10px;
  background-color: ${props => props.formBgColor};
`
export const LoginPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
`
export const AppLogo = styled.img`
  width: 120px;
  margin: 30px;
  height: 40px;
  align-self: center;
`
export const CustomInput = styled.input`
  height: 35px;
  width: 300px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: ${props => props.color};
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
`
export const CustomInputCheckBox = styled.input`
  font-weight: 500px;
`
export const CustomLabel = styled.label`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
  padding-left: 15px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-left: 0px;
`
export const CustomLabelPassword = styled.label`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #0f0f0f;
  padding-left: 5px;
  color: ${props => props.color};
  //   padding-bottom: 5px;
`
export const LoginButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  height: 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #3b82f6;
  cursor: pointer;
  margin-top: 30px;
  width: 300px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  color: #ff0000;
`
