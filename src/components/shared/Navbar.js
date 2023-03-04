import React, { useState } from 'react';
import { useLocation } from '@reach/router';
import NavbarLarge from './NavbarLarge';
import NavbarMobile from './NavbarMobile';
import { useIntl } from 'react-intl';

const Navbar = ({ header, is404Page }) => {
  const [sidebar, setSidebar] = useState(false)

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

  const intl = useIntl();
  const location = useLocation();

  const jaPage = intl.locale === 'ja';
  const homePage = jaPage ? '/ja/' : '/';
  var altPage = jaPage
    ? location.pathname.slice(3)
    : `/ja${location.pathname}`;

  const aboutLink = jaPage ? '/ja/about/' : '/about/';
  const careersLink = jaPage ? '/ja/careers/' : '/careers/';
  const newsroomLink = jaPage ? '/ja/newsroom/' : '/newsroom/';
  const blogLink = '/blog/';
  const organizationLink = jaPage ? '/ja/organization/' : '/organization/';
  const contactLink = jaPage ? '/ja/contact/' : '/contact/';
  const hosLink = '/humans-of-socious/';

  const locationPathname = [hosLink,blogLink].includes(location.pathname) ? location.pathname : location.pathname+"/";
  if((locationPathname).startsWith(hosLink) || (locationPathname).startsWith(blogLink)){
    altPage = location.pathname;
  }

  let navSelector = '';


  return <>
    <div className="flex xxs:hidden mdp:flex justify-end">
      <NavbarLarge
        headerStyle={headerStyle}
        homePage={homePage}
        aboutLink={aboutLink}
        organizationLink={organizationLink}
        careersLink={careersLink}
        newsroomLink={newsroomLink}
        blogLink={blogLink}
        hosLink={hosLink}
        altPage={altPage}
      />

    </div>
    <div className="hidden xxs:flex mdp:hidden justify-end">
      <NavbarMobile
        headerStyle={headerStyle}
        sidebar={sidebar}
        location={location}
        setSidebar={setSidebar}
        homePage={homePage}
        aboutLink={aboutLink}
        organizationLink={organizationLink}
        careersLink={careersLink}
        newsroomLink={newsroomLink}
        blogLink={blogLink}
        hosLink={hosLink}
        altPage={altPage}
        is404Page={is404Page}
      />
    </div>
  </>






};

export default Navbar;
