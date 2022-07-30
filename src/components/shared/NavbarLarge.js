import React from 'react';
import {Link} from 'gatsby';
import {useIntl, FormattedMessage} from 'react-intl';

const NavbarLarge = (props) => {
  const {headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage} =
    props;

  const intl = useIntl();
  const jaPage = intl.locale === 'ja';

  return (
    <div className={headerStyle}>
      <nav>
        <div className="header__logo-container">
          <Link to={homePage}>Home</Link>
        </div>
        <div className="nav-links">
          <div className="nav-item">
            <Link to={aboutLink}>
              <FormattedMessage id="about-title" />
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
          <a className="header__language-switcher" href={altPage}>
            {jaPage ? 'English' : '日本語'}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLarge;
