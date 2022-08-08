import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {slide as Menu} from 'react-burger-menu';
import {useIntl} from 'react-intl';

const NavbarMobile = (props) => {
  const {headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage, organizationLink} =
    props;

  const activeLinkStyleMobile = {
    paddingLeft: '0.5rem',
    borderLeft: '2px solid white',
  };

  const intl = useIntl();
  const jaPage = intl.locale === 'ja';

  return (
    <nav className={headerStyle} style={{zIndex: '100'}}>
      <div className="header__logo-container">
        <Link to={homePage}>
          <StaticImage
            src="../../images/socious-logo.png"
            className="header__logo-image"
            alt="Socious brand logo"
          />
        </Link>
      </div>
      <Menu right>
        <Link
          to={aboutLink}
          activeStyle={activeLinkStyleMobile}
          partiallyActive={true}
          className="menu-item"
        >
          {jaPage ? 'ソーシャスについて' : 'About'}
        </Link>
        <Link
          to={organizationLink}
          activeStyle={activeLinkStyleMobile}
          partiallyActive={true}
          className="menu-item"
        >
          {jaPage ? '団体' : 'Organizations'}
        </Link>
        <Link
          to={careersLink}
          activeStyle={activeLinkStyleMobile}
          partiallyActive={true}
          className="menu-item"
        >
          {jaPage ? '採用情報' : 'Careers'}
        </Link>
        <Link
          to={newsroomLink}
          activeStyle={activeLinkStyleMobile}
          partiallyActive={true}
          className="menu-item"
        >
          {jaPage ? 'ニュース' : 'Newsroom'}
        </Link>
        <a className="header__language-switcher" href={altPage}>
          {jaPage ? 'English' : '日本語'}
        </a>
      </Menu>
    </nav>
  );
};

export default NavbarMobile;
