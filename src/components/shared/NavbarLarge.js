import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const NavbarLarge = (props) => {
  const {
    headerStyle,
    navLinkStyle,
    homePage,
    logoImageStyle,
    aboutLink,
    careersLink,
    newsroomLink,
    languageSwitcher,
    jaPage
  } = props

  const activeLinkStyle = {
    paddingBottom: "0.5rem",
    borderBottom: "2px solid white"
  }
  
  return (
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
  )
}

export default NavbarLarge
