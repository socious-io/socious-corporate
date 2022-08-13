import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

import NavbarLarge from './NavbarLarge';
import NavbarMobile from './NavbarMobile';
import { useIntl } from 'react-intl';

const Navbar = ({ header }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function currentWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', currentWidth);
    return () => {
      window.removeEventListener('resize', currentWidth);
    };
  }, []);

  let headerStyle;
  switch (header) {
    case 'primary':
      headerStyle = 'header header-primary';
      break;
    case 'transparent':
      headerStyle = 'header header-transparent';
      break;
    default:
      headerStyle = 'header header-default';
  }
  console.log(header);

  const intl = useIntl();
  const location = useLocation();

  const jaPage = intl.locale === 'ja';
  const homePage = jaPage ? '/ja/' : '/';
  const altPage = jaPage
    ? location.pathname.slice(3)
    : `/ja${location.pathname}`;

  const aboutLink = jaPage ? '/ja/about' : '/about';
  const careersLink = jaPage ? '/ja/careers' : '/careers';
  const newsroomLink = jaPage ? '/ja/newsroom' : '/newsroom';
  const blogLink = jaPage ? '/ja/blog' : '/blog';
  const organizationLink = jaPage ? '/ja/organization' : '/organization';
  const contactLink = jaPage ? '/ja/contact' : '/contact';

  let navSelector = '';

  if (windowWidth && windowWidth <= 600) {
    return (
      <NavbarMobile
        headerStyle={headerStyle}
        homePage={homePage}
        aboutLink={aboutLink}
        organizationLink={organizationLink}
        careersLink={careersLink}
        newsroomLink={newsroomLink}
        blogLink={blogLink}
        altPage={altPage}
      />
    );
  } else {
    return (
      <NavbarLarge
        headerStyle={headerStyle}
        homePage={homePage}
        aboutLink={aboutLink}
        organizationLink={organizationLink}
        careersLink={careersLink}
        newsroomLink={newsroomLink}
        blogLink={blogLink}
        altPage={altPage}
      />
    );
  }
};

export default Navbar;
