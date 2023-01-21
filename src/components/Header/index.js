import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  HeaderContainer,
  HeaderAppLogo,
  HeaderSubContainer,
  ProfileImage,
  LogoutButton,
  PopUpContainer,
  LogoutMessage,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
  ThemeButton,
} from './styledComponent'

const DARK_THEME =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const LIGHT_THEME =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, switchTheme} = value

        const textColor = isDarkMode ? '#ffffff' : '#475569'
        const backgroundColor = isDarkMode ? '#212121' : '#ffffff'
        const desColor = isDarkMode ? '#cbd5e1' : '#94a3b8'

        const changeTheme = () => {
          switchTheme()
        }

        return (
          <HeaderContainer theme={isDarkMode}>
            <Link to="/">
              <HeaderAppLogo
                src={isDarkMode ? DARK_THEME : LIGHT_THEME}
                alt="website logo"
              />
            </Link>
            <HeaderSubContainer>
              {isDarkMode ? (
                <ThemeButton data-testid="theme" onClick={changeTheme}>
                  <HiOutlineSun className="light-theme" />
                </ThemeButton>
              ) : (
                <ThemeButton data-testid="theme" onClick={changeTheme}>
                  <HiMoon className="dark-theme" />
                </ThemeButton>
              )}
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <LogoutButton buttonTheme={isDarkMode} type="button">
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <PopUpContainer
                    isDark={isDarkMode}
                    popUpBgColor={backgroundColor}
                  >
                    <LogoutMessage popUpTextColor={textColor}>
                      Are you sure, you want to logout?
                    </LogoutMessage>
                    <ButtonContainer>
                      <CancelButton
                        cancelBtnColor={desColor}
                        onClick={() => close()}
                        type="button"
                        data-testid="close"
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton
                        confirmBtnColor={desColor}
                        onClick={onClickLogout}
                      >
                        Confirm
                      </ConfirmButton>
                    </ButtonContainer>
                  </PopUpContainer>
                )}
              </Popup>
            </HeaderSubContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
