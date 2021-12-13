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
  const contactUs = jaPage ? 'お問い合わせ' : 'Contact Us'
  const companyProfile = jaPage ? '会社情報' : 'Company Profile'

  const linkLanguageSelector = (pageUrl) => {
    return jaPage ? `/ja${pageUrl}` : pageUrl
  }

  return (
    <footer>
      <div className="footer-item">
        <div className="footer-title">
          <h4>{jaPage ? 'ソーシャスについて' : 'About'}</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to="/">{jaPage ? 'ソーシャスアプリ' : 'Socious App'}</Link></li>
            <li><AnchorLink to={linkLanguageSelector("/about#our-mission")} title={ourMission} /></li>
            <li><AnchorLink to={linkLanguageSelector("/about#social-issues")} title={socialIssues} /></li>
            <li><AnchorLink to={linkLanguageSelector("/about#what-we-do")} title={whatWeDo} /></li>
            <li><AnchorLink to={linkLanguageSelector("/about#our-vision")} title={ourVision} /></li>
            <li><AnchorLink to={linkLanguageSelector("/about#our-values")} title={cultureAndValues} /></li>
            <li><AnchorLink to={linkLanguageSelector("/about#our-team")} title={ourTeam} /></li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h4>{jaPage ? '最新情報' : 'Latest News'}</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to={linkLanguageSelector("/newsroom")}>{jaPage ? 'ニュースルーム' : 'Newsroom'}</Link></li>
            <li><a href="https://www.facebook.com/socious.io" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/socious-io/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/socious.io/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h4>{jaPage ? 'コーポレート' : 'Corporate'}</h4>
        </div>
        <div className="footer-list">
          <ul>
            <li><Link to={linkLanguageSelector("/careers")}>{jaPage ? '採用情報' : 'Join Us'}</Link></li>
            <li><AnchorLink to={linkLanguageSelector("/about#contact-us")} title={contactUs} /></li>
            <li><AnchorLink to={linkLanguageSelector("/about#company-profile")} title={companyProfile} /></li>
            <li><Link to={linkLanguageSelector("/support")}>{jaPage ? 'サポート' : 'Support'}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
