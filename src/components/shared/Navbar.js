import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

const Navbar = () => {
  const location = useLocation();
  console.log(location)

  const headerStyle = location.pathname === '/' ? 'header' : 'header header-fixed'
  const logoImageStyle = location.pathname === '/' ? 'header__logo-image' : 'header__logo-image-transparent'
  const languageSwitcherStyle = location.pathname === '/' ? 'header__language-switcher' : 'header__language-switcher-transparent'
  
  return (
    <nav className={headerStyle}>
      <div className="header__logo-container">
        <img className={logoImageStyle} src="images/socious-logo.png" />
      </div>
      <a className={languageSwitcherStyle} href="./ja">日本語</a>
    </nav>
  )
}

export default Navbar
