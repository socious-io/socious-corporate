import * as React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <div className="footer-item">
        <div className="footer-title">
          <h4>About</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to="/">Socious App</Link></li>
            <li><a href="https://socious.io/about#our-mission">Our Mission</a></li>
            <li><a href="https://socious.io/about#social-issues">Social Issues</a></li>
            <li><a href="https://socious.io/about#what-we-do">What We Do</a></li>
            <li><a href="https://socious.io/about#our-vision">Our Vision</a></li>
            <li><a href="https://socious.io/about#our-values">Culture & Values</a></li>
            <li><a href="https://socious.io/about#our-team">Our Team</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h4>Latest News</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><a href="#">Newsroom</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h4>Corporate</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><a href="https://socious.io/careers">Join Us</a></li>
            <li><a href="https://socious.io/about#contact-us">Contact Us</a></li>
            <li><a href="https://socious.io/about#company-profile">Company Profile</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
