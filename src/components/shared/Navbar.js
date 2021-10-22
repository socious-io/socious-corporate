import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

const Navbar = () => {
  const location = useLocation();

  const headerStyle = location.pathname === '/' ? 'header' : 'header header-fixed'
  const logoImageStyle = location.pathname === '/' ? 'header__logo-image' : 'header__logo-image-transparent'
  const navLinkStyle = location.pathname === '/' ? 'nav-item' : 'nav-item-transparent'
  const languageSwitcherStyle = location.pathname === '/' ? 'header__language-switcher' : 'header__language-switcher-transparent'

  const activeLinkStyle = {
    paddingBottom: "0.5rem",
    borderBottom: "2px solid white"
  }
  
  return (
    <nav className={headerStyle}>
      <div className="header__logo-container">
        <Link to="/">
          <img className={logoImageStyle} src="images/socious-logo.png" />
        </Link>
      </div>
      <div className="nav-links">
        <div className={navLinkStyle}>
          <Link 
          to="/about"
          activeStyle={activeLinkStyle}
          partiallyActive={true}
          >
            About
          </Link>
        </div>
        <div className={navLinkStyle}>
          <Link 
          to="/careers"
          activeStyle={activeLinkStyle}
          partiallyActive={true}
          >
            Careers
          </Link>
        </div>
        <a className={languageSwitcherStyle} href="./about-ja">日本語</a>
      </div>
    </nav>
  )
}

export default Navbar
