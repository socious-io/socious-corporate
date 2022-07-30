import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {useIntl} from 'react-intl';

const NavbarLarge = (props) => {
  const {headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage} =
    props;

  const activeLinkStyle = {
    paddingBottom: '0.5rem',
    borderBottom: '2px solid white',
  };

  const intl = useIntl();
  const jaPage = intl.locale === 'ja';

  return (
    <nav className={headerStyle}>
      <div className="header__logo-container">
        <Link to={homePage}>
          <StaticImage
            src="../../images/socious-logo.png"
            className="header__logo-image"
            alt="Socious brand logo"
          />
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link
            to={aboutLink}
            activeStyle={activeLinkStyle}
            partiallyActive={true}
          >
            {jaPage ? 'ソーシャスについて' : 'About'}
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to={careersLink}
            activeStyle={activeLinkStyle}
            partiallyActive={true}
          >
            {jaPage ? '採用情報' : 'Careers'}
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to={newsroomLink}
            activeStyle={activeLinkStyle}
            partiallyActive={true}
          >
            {jaPage ? 'ニュース' : 'Newsroom'}
          </Link>
        </div>
        <a className="header__language-switcher" href={altPage}>
          {jaPage ? 'English' : '日本語'}
        </a>
      </div>
    </nav>
  );
};

export default NavbarLarge;
