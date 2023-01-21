import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginPageContainer,
  LoginPageFormContainer,
  LoginPageForm,
  AppLogo,
  CustomInput,
  CustomLabel,
  LoginButton,
  ShowPasswordContainer,
  CustomLabelPassword,
  CustomInputCheckBox,
  ErrorMsg,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

const DARK_THEME_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const LIGHT_THEME_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showSubmitError,
      isShowPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const loginBgColor = isDarkMode ? '#212121' : '#ffffff'
          const loginFormBgColor = isDarkMode ? '#000000' : '#ffffff'
          const textColor = isDarkMode ? '#ffffff' : '#475569'
          const appLogo = isDarkMode ? DARK_THEME_LOGO : LIGHT_THEME_LOGO
          const showPassword = isShowPassword ? 'text' : 'password'

          return (
            <LoginPageContainer bgColor={loginBgColor}>
              <LoginPageFormContainer
                isDark={isDarkMode}
                formBgColor={loginFormBgColor}
              >
                <AppLogo src={appLogo} alt="website logo" />
                <LoginPageForm onSubmit={this.submitForm}>
                  <CustomLabel color={textColor} htmlFor="username">
                    USERNAME
                  </CustomLabel>
                  <CustomInput
                    id="username"
                    placeholder="Username"
                    value={username}
                    color={textColor}
                    onChange={this.onChangeUsername}
                  />
                  <CustomLabel color={textColor} htmlFor="password">
                    PASSWORD
                  </CustomLabel>
                  <CustomInput
                    id="password"
                    type={showPassword}
                    placeholder="Password"
                    value={password}
                    color={textColor}
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordContainer>
                    <CustomInputCheckBox
                      onClick={this.toggleShowPassword}
                      id="showPassword"
                      type="checkbox"
                    />
                    <CustomLabelPassword
                      color={textColor}
                      htmlFor="showPassword"
                    >
                      Show Password
                    </CustomLabelPassword>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </LoginPageForm>
              </LoginPageFormContainer>
            </LoginPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Login
