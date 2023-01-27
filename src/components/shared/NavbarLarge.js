import React, { useState } from 'react'
import { Link } from 'gatsby';
import { useIntl, FormattedMessage } from 'react-intl';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import BasicModal from '../shared/QR-Modal';


import IconWeb from '../../images/icons/line/web.svg';

const NavbarLarge = (props) => {
  const { headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage, blogLink, organizationLink, hosLink } =
    props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // let headerStyle;
  // switch (header) {
  //   case 'primary':
  //     headerStyle = 'header header-primary';
  //     break;
  //   case 'transparent':
  //     headerStyle = 'header header-transparent';
  //     break;
  //   default:
  //     headerStyle = 'header header-default';
  // }

  const { logo } = useStaticQuery(
    graphql`
        query {
          logo: file(relativePath: {eq: "logo-horizontal.svg"}) {
            childImageSharp {
              gatsbyImageData(
                width: 2000,
                quality: 100,
                webpOptions: {quality: 100}
                placeholder: BLURRED
              )
            }
          }
        }
      `
  )
  const blueLogo = getImage(logo)
  // console.log(logo);

  const intl = useIntl();
  const jaPage = intl.locale === 'ja';

  return (
    <>
      <div className={headerStyle}>
        <nav>
          <div className="nav-links-left">
            <div className="nav-item">
              <div className="header__logo-container">
                <Link to={homePage}>
                  {/* <StaticImage
                src="../../images/logo-horizontal-white.svg"
                className="header__logo-image"
                alt="Socious brand logo"
              /> */}
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <Link to={aboutLink}>
                <FormattedMessage id="about-title" />
              </Link>
            </div>
            <div className="nav-item">
              <Link to={organizationLink}>
                Organizations
              </Link>
            </div>
            <div className="nav-item">
              <Link to={careersLink}>
                <FormattedMessage id="careers-title" />
              </Link>
            </div>
            <div className="nav-item">
              <Link to={newsroomLink}>
                <FormattedMessage id="news-title" />
              </Link>
            </div>
            <div className="nav-item">
              <Link to={blogLink}>
                Blog
              </Link>
            </div>
            <div className="nav-item">
              <Link to={hosLink}>
                Humans of Socious
              </Link>
            </div>
            <div className="nav-item">
              <a className="header__language-switcher" href={altPage}>
                <IconWeb />
                {jaPage ? 'English(US)' : '日本語'}
              </a>
            </div>
          </div>
          <div className="nav-links-right">
            <div className="nav-item">
              <Link to={"/app"}>
                <FormattedMessage id="sign-in" />
              </Link>
            </div>
            <div className="nav-item">
              <Link to={"/app/auth/signup"}>
                <FormattedMessage id="sign-up" />
              </Link>
            </div>
            <div className="nav-item">
              <button
                onClick={handleOpen}
                className='section-app-links__app-links-button-work'>
                <FormattedMessage
                  id="get-the-app"
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <BasicModal open={open} handleClose={handleClose} /></>
  );
};

export default NavbarLarge;
