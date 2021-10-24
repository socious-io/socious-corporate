import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  const location = useLocation();

  const headerStyle = location.pathname === '/about' || location.pathname === '/careers' ? 'header header-fixed' : 'header'
  const logoImageStyle = location.pathname === '/about' || location.pathname === '/careers' ? 'header__logo-image-transparent' : 'header__logo-image'
  const navLinkStyle = location.pathname === '/about' || location.pathname === '/careers' ? 'nav-item-transparent' : 'nav-item'
  const languageSwitcherStyle = location.pathname === '/about' || location.pathname === '/careers' ? 'header__language-switcher-transparent' : 'header__language-switcher'

  const activeLinkStyle = {
    paddingBottom: "0.5rem",
    borderBottom: "2px solid white"
  }
  
  return (
    <nav className={headerStyle}>
      <div className="header__logo-container">
        <Link to="/">
          <StaticImage src="../../images/socious-logo.png" className={logoImageStyle} alt="Socious brand logo" />
          {/* <img className={logoImageStyle} src="images/socious-logo.png" /> */}
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
