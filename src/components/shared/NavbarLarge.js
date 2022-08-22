import React from 'react';
import { Link } from 'gatsby';
import { useIntl, FormattedMessage } from 'react-intl';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

import IconWeb from '../../images/icons/line/web.svg';

const NavbarLarge = (props) => {
  const { headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage, blogLink, organizationLink } =
    props;

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
  console.log(logo);

  const intl = useIntl();
  const jaPage = intl.locale === 'ja';

  return (
    <div className={headerStyle}>
      <nav>
        <div className="header__logo-container">
          <Link to={homePage}>
            {/* <StaticImage
            src="../../images/logo-horizontal-white.svg"
            className="header__logo-image"
            alt="Socious brand logo"
          /> */}
          </Link>
        </div>
        <div className="nav-links">
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
          {/* <div className="nav-item">
            <Link to={blogLink}>
              Blog
            </Link>
          </div> */}
          <a className="header__language-switcher" href={altPage}>
            <IconWeb />
            {jaPage ? 'English(US)' : '日本語'}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLarge;
