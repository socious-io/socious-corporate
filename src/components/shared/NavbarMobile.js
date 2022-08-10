import React, {useState }from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {slide as Menu} from 'react-burger-menu';
import {useIntl} from 'react-intl';
import { FormattedMessage } from "react-intl";
import BasicModal from '../shared/QR-Modal';

const NavbarMobile = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage, organizationLink, blogLink} =
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
        <Link to={homePage}/>
          {/* <StaticImage
            src="../../images/socious-logo.png"
            className="header__logo-image"
            alt="Socious brand logo"
          /> */}
        
      </div>
      <Menu right>
      <div className="header_mobile-container">
        <Link to={homePage}/>
          {/* <StaticImage
            src="static/images/logo-horizontal-blue.png"
            className="header__logo-image"
            alt="Socious brand logo"
          /> */}
        
      </div>
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
          {jaPage ? 'ニュース' : 'News'}
        </Link>
        <Link
          to={blogLink}
          activeStyle={activeLinkStyleMobile}
          partiallyActive={true}
          className="menu-item"
        >
          {jaPage ? 'ブログ（英語）' : 'Blog'}
        </Link>
        <a className="header__language-switcher" href={altPage}>
          {jaPage ? 'English' : '日本語'}
        </a>
        <button 
          onClick={handleOpen}
          className='job-action__get'>
          <FormattedMessage
              id="get-socious"
            />
          </button>
          <BasicModal open={open} handleClose={handleClose}/>
      </Menu>
    </nav>
  );
};

export default NavbarMobile;
