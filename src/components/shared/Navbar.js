import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    function currentWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", currentWidth)
    return () => {
      window.removeEventListener("resize", currentWidth)
      console.log("Unmount")
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
  
  const activeLinkStyle = {
    paddingBottom: "0.5rem",
    borderBottom: "2px solid white"
  }

  const activeLinkStyleMobile = {
    paddingLeft: "0.5rem",
    borderLeft: "2px solid white"
  }

  return (
    <div>
      { windowWidth > 600
      ? 
      <nav className={headerStyle}>
        <div className="header__logo-container">
          <Link to={homePage}>
            <StaticImage src="../../images/socious-logo.png" className={logoImageStyle} alt="Socious brand logo" />
          </Link>
        </div>
        <div className="nav-links">
          <div className={navLinkStyle}>
            <Link 
            to={aboutLink}
            activeStyle={activeLinkStyle}
            partiallyActive={true}
            >
              {jaPage ? 'ソーシャスについて' : 'About'}
            </Link>
          </div>
          <div className={navLinkStyle}>
            <Link 
            to={careersLink}
            activeStyle={activeLinkStyle}
            partiallyActive={true}
            >
              {jaPage ? '採用情報' : 'Careers'}
            </Link>
          </div>
          <div className={navLinkStyle}>
            <Link 
            to={newsroomLink}
            activeStyle={activeLinkStyle}
            partiallyActive={true}
            >
              {jaPage ? 'ニュース' : 'Newsroom'}
            </Link>
          </div>
          {languageSwitcher}
        </div>
      </nav>
      :
      <div className={headerStyle} style={{ zIndex: "100" }}>
        <div className="header__logo-container">
          <Link to={homePage}>
            <StaticImage src="../../images/socious-logo.png" className={logoImageStyle} alt="Socious brand logo" />
          </Link>
        </div>
        <Menu right >
          <Link 
          to={aboutLink}
          activeStyle={activeLinkStyleMobile}
          partiallyActive={true}
          className="menu-item"
          >
            {jaPage ? 'ソーシャスについて' : 'About'}
          </Link>
          <Link 
            to={careersLink}
            activeStyle={activeLinkStyleMobile}
            partiallyActive={true}
            className="menu-item"
            >
              {jaPage ? '採用情報' : 'Careers'}
          </Link>
          <Link 
            to={newsroomLink}
            activeStyle={activeLinkStyleMobile}
            partiallyActive={true}
            className="menu-item"
            >
              {jaPage ? 'ニュース' : 'Newsroom'}
          </Link>
          {languageSwitcher}
        </Menu>
      </div>
    }
  </div>
  )
}

export default Navbar
