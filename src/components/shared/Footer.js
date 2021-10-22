import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
            <li><AnchorLink to="/about#our-mission" title="Our Mission" /></li>
            <li><AnchorLink to="/about#social-issues" title="Social Issues" /></li>
            <li><AnchorLink to="/about#what-we-do" title="What We Do" /></li>
            <li><AnchorLink to="/about#our-vision" title="Our Vision" /></li>
            <li><AnchorLink to="/about#our-values" title="Culture & Values" /></li>
            <li><AnchorLink to="/about#our-team" title="Our Team" /></li>
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
            <li><Link to="/careers">Join Us</Link></li>
            <li><AnchorLink to="/about#contact-us" title="Contact Us" /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
