
import * as React from 'react'
import { useLocation } from '@reach/router';
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
      <div className='footer-links'>
        <div className="footer-item-box">
          <div className="footer-item">
            <div className="footer-title">
              <h4>{jaPage ? 'ソーシャスについて' : 'About Us'}</h4>
            </div>
            <div className="footer-list">
              <ul>
                <li><AnchorLink to={linkLanguageSelector("/about#mission")} title={ourMission} /></li>
                <li><AnchorLink to={linkLanguageSelector("/about#our-team")} title={ourTeam} /></li>
                <li><Link to={linkLanguageSelector("/careers")}>{jaPage ? '採用情報' : 'Careers'}</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-title">
              <h4>{jaPage ? 'お問い合わせ' : 'Contact'}</h4>
            </div>
            <div className="footer-list">
              <ul>
                <li><AnchorLink to={linkLanguageSelector("/contact")} title={contactUs} /></li>
                <li><Link to={linkLanguageSelector("/support")}>{jaPage ? 'サポート' : 'Support'}</Link></li>
                <li><Link to={linkLanguageSelector("/newsroom")}>{jaPage ? 'ニュースルーム' : 'Newsroom'}</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-title">
              <h4>{jaPage ? 'コーポレート' : 'Download'}</h4>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a
                      href="https://apps.apple.com/jp/app/socious/id1581904474"
                      target="_blank"
                      rel="noreferrer"
                    >iOS app</a>
                </li>
                <li>
                  <a
                      href="https://play.google.com/store/apps/details?id=com.dissocialnetwork"
                      target="_blank"
                      rel="noreferrer"
                    >Android app</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-social'>
          <ul>
          <li><a href="https://www.facebook.com/socious.io" target="_blank" rel="noreferrer"><FacebookRoundedIcon style={{ fontSize: "2rem"}} /></a></li>
          <li><a href="https://www.linkedin.com/company/socious-io/" target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: "2rem"}} /></a></li>
          <li><a href="https://www.instagram.com/socious.io/" target="_blank" rel="noreferrer"><InstagramIcon style={{ fontSize: "2rem"}} /></a></li>
          <li><a href="https://twitter.com/SociousDAO" target="_blank" rel="noreferrer"><TwitterIcon style={{ fontSize:  "2rem"}} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-ending">
        <div>
          <p>
            Copyright &copy; 2022 Socious Inc.
          </p>
          <p>
            All rights reserved.
          </p>
        </div>
        <div className="links">
          <a target="_blank"  rel="noreferrer" href={jaPage ? '/user-agreement-ja/' : '/user-agreement/'}>Terms</a>
          <a target="_blank"  rel="noreferrer" href={jaPage ? '/privacy-policy-ja/' : '/privacy-policy/'}>Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
