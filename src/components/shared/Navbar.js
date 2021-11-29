import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router';

import NavbarLarge from './NavbarLarge';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(null)
  
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    function currentWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", currentWidth)
    return () => {
      window.removeEventListener("resize", currentWidth)
    }
  }, [])

  const location = useLocation();

  const transparentNavPaths = location.pathname.includes('/about') || 
                              location.pathname === '/careers' || 
                              location.pathname === '/ja/careers' || 
                              location.pathname === '/newsroom' ||
                              location.pathname === '/ja/newsroom'

  const headerStyle = transparentNavPaths ? 'header header-fixed' : 'header'
  const logoImageStyle = transparentNavPaths ? 'header__logo-image-transparent' : 'header__logo-image'
  const navLinkStyle = transparentNavPaths ? 'nav-item-transparent' : 'nav-item'
  const languageSwitcherStyle = transparentNavPaths ? 'header__language-switcher-transparent' : 'header__language-switcher'

  const jaPage = location.pathname.includes('/ja')
  const homePage = jaPage ? "/ja/" : "/"
  const altPage = jaPage ? location.pathname.slice(3) : `/ja${location.pathname}`
  const languageSwitcher = jaPage ?
                           <a className={languageSwitcherStyle} href={altPage}>English</a> :
                           <a className={languageSwitcherStyle} href={altPage}>日本語</a>

  const aboutLink = jaPage ? "/ja/about" : "/about"
  const careersLink = jaPage ? "/ja/careers" : "/careers"
  const newsroomLink = jaPage ? "/ja/newsroom" : "/newsroom"
  
  let navSelector = ""
  
  if (windowWidth === null) {
    return navSelector
  } else if (windowWidth <= 600) {
    navSelector = <NavbarMobile
                    headerStyle={headerStyle}
                    homePage={homePage}
                    logoImageStyle={logoImageStyle}
                    aboutLink={aboutLink}
                    careersLink={careersLink}
                    newsroomLink={newsroomLink}
                    languageSwitcher={languageSwitcher}
                    jaPage={jaPage}
                  />
  } else {
    navSelector = <NavbarLarge
                    headerStyle={headerStyle}
                    navLinkStyle={navLinkStyle}
                    homePage={homePage}
                    logoImageStyle={logoImageStyle}
                    aboutLink={aboutLink}
                    careersLink={careersLink}
                    newsroomLink={newsroomLink}
                    languageSwitcher={languageSwitcher}
                    jaPage={jaPage}
                  />
  }

  return (
    <div>
      { navSelector }
    </div>
  )
}

export default Navbar
