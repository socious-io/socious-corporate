import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { slide as Menu } from 'react-burger-menu'

const NavbarMobile = (props) => {
  const {
    headerStyle,
    homePage,
    logoImageStyle,
    aboutLink,
    careersLink,
    newsroomLink,
    languageSwitcher,
    jaPage
  } = props

  const activeLinkStyleMobile = {
    paddingLeft: "0.5rem",
    borderLeft: "2px solid white"
  }
  
  return (
    <nav className={headerStyle} style={{ zIndex: "100" }}>
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
    </nav>
  )
}

export default NavbarMobile
