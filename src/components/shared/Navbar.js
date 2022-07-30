import React, {useState, useEffect} from 'react';
import {useLocation} from '@reach/router';

import NavbarLarge from './NavbarLarge';
import NavbarMobile from './NavbarMobile';
import {useIntl} from 'react-intl';

const Navbar = ({header}) => {
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
    case '':
      headerStyle = 'header';
      break;
    case 'primary':
      headerStyle = 'header header-primary';
      break;
    case 'transparent':
      headerStyle = 'header header-transparent';
      break;
    default: {
      // DEPRECATED
      const location = useLocation();
      const transparentNavPaths =
        location.pathname === '/newsroom' ||
        location.pathname === '/newsroom/' ||
        location.pathname === '/ja/newsroom' ||
        location.pathname === '/ja/newsroom/';

      headerStyle = transparentNavPaths
        ? 'header header-transparent'
        : 'header';
    }
  }

  const intl = useIntl();

  const jaPage = intl.locale === 'ja';
  const homePage = jaPage ? '/ja/' : '/';
  const altPage = jaPage
    ? location.pathname.slice(3)
    : `/ja${location.pathname}`;

  const aboutLink = jaPage ? '/ja/about' : '/about';
  const careersLink = jaPage ? '/ja/careers' : '/careers';
  const newsroomLink = jaPage ? '/ja/newsroom' : '/newsroom';

  let navSelector = '';

  if (windowWidth && windowWidth <= 600) {
    navSelector = (
      <NavbarMobile
        headerStyle={headerStyle}
        homePage={homePage}
        aboutLink={aboutLink}
        careersLink={careersLink}
        newsroomLink={newsroomLink}
        altPage={altPage}
      />
    );
  } else {
    navSelector = (
      <NavbarLarge
        headerStyle={headerStyle}
        homePage={homePage}
        aboutLink={aboutLink}
        careersLink={careersLink}
        newsroomLink={newsroomLink}
        altPage={altPage}
      />
    );
  }

  return <div>{navSelector}</div>;
};

export default Navbar;
