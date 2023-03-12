import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeLeftContainer,
  CategoryContainer,
  CategoryList,
  ContactUsContainer,
  ListItem,
  ListItemTitle,
  ContactUsTitle,
  SocialMediaImage,
  CustomImage,
  ContactUsDescription,
} from './styledComponent'

import './index.css'

const sideBarContent = [
  {id: 0, icon: <AiFillHome className="icon" />, title: 'Home', link: '/'},
  {
    id: 1,
    icon: <HiFire className="icon" />,
    title: 'Trending',
    link: '/trending',
  },
  {
    id: 2,
    icon: <SiYoutubegaming className="icon" />,
    title: 'Gaming',
    link: '/gaming',
  },
  {
    id: 3,
    icon: <BiListPlus className="icon" />,
    title: 'Saved Videos',
    link: '/saved-videos',
  },
]

const SideBar = props => {
  const {tabId} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const textColor = isDarkMode ? '#ffffff' : '#212121'

        return (
          <HomeLeftContainer theme={isDarkMode}>
            <CategoryContainer>
              <nav>
                <CategoryList>
                  {sideBarContent.map(eachContent => {
                    const {icon} = eachContent
                    const isClicked = eachContent.id === tabId
                    let activeBgColor = 'transparent'
                    let activeColor = isDarkMode ? '#cccccc' : '#606060'
                    let fontWeight = 'normal'
                    if (isClicked) {
                      activeBgColor = isDarkMode ? '#424242' : '#f1f5f9'
                      activeColor = 'red'
                      fontWeight = 'bold'
                    }

                    return (
                      <Link
                        key={eachContent.id}
                        className="link-item"
                        to={eachContent.link}
                      >
                        <ListItem
                          bgColor={activeBgColor}
                          key={eachContent.id}
                          color={activeColor}
                        >
                          {icon}
                          <ListItemTitle
                            isDark={isDarkMode}
                            fontWeight={fontWeight}
                          >
                            {eachContent.title}
                          </ListItemTitle>
                        </ListItem>
                      </Link>
                    )
                  })}
                </CategoryList>
              </nav>
            </CategoryContainer>
            <ContactUsContainer>
              <ContactUsTitle color={textColor}>CONTACT US</ContactUsTitle>
              <SocialMediaImage>
                <CustomImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <CustomImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <CustomImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaImage>
              <ContactUsDescription color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ContactUsDescription>
            </ContactUsContainer>
          </HomeLeftContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SideBar
