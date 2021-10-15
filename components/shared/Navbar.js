import * as React from 'react'
import { Link } from 'gatsby'
import '../../src/styles/index.scss'

const Navbar = () => {
  return (
    <nav class="header">
      <div class="header__logo-container">
        <img class="header__logo-image" src="./images/socious-logo.png" />
      </div>
      <a class="header__language-switcher" href="./ja">日本語</a>
    </nav>
  )
}

export default Navbar
