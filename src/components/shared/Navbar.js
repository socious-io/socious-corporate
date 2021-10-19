import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav className="header">
      <div className="header__logo-container">
        <img className="header__logo-image" src="images/socious-logo.png" />
      </div>
      <a className="header__language-switcher" href="./ja">日本語</a>
    </nav>
  )
}

export default Navbar
