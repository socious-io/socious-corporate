import * as React from 'react'
import { useLocation } from '@reach/router';
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = () => {
  const location = useLocation();

  const jaPage = location.pathname.includes('/ja')

  const ourMission = jaPage ? 'ミッション' : 'Our Mission'
  const socialIssues = jaPage ? '社会課題' : 'Social Issues'
  const whatWeDo = jaPage ? 'ソーシャスの活動' : 'What We Do'
  const ourVision = jaPage ? 'ビジョン' : 'Our Vision'
  const cultureAndValues = jaPage ? 'ソーシャスの文化' : 'Culture & Values'
  const ourTeam = jaPage ? 'チーム' : 'Our Team'

  return (
    <footer>
      <div className="footer-item">
        <div className="footer-title">
          <h4>{jaPage ? 'ソーシャスについて' : 'About'}</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to="/">{jaPage ? 'ソーシャスアプリ' : 'Socious App'}</Link></li>
            <li><AnchorLink to="/about#our-mission" title={ourMission} /></li>
            <li><AnchorLink to="/about#social-issues" title={socialIssues} /></li>
            <li><AnchorLink to="/about#what-we-do" title={whatWeDo} /></li>
            <li><AnchorLink to="/about#our-vision" title={ourVision} /></li>
            <li><AnchorLink to="/about#our-values" title={cultureAndValues} /></li>
            <li><AnchorLink to="/about#our-team" title={ourTeam} /></li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h4>Latest News</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to="/newsroom/">Newsroom</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h4>Corporate</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to="/careers/">Join Us</Link></li>
            <li><AnchorLink to="/about#contact-us" title="Contact Us" /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
