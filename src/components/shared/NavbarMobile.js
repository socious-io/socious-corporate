import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { slide as Menu } from 'react-burger-menu';
import { useIntl } from 'react-intl';
import { FormattedMessage } from "react-intl";
import BasicModal from '../shared/QR-Modal';
import CrossButtonSidebar from './CrossButtonSidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CheckMarkLang from './CheckMarkLang';

const NavbarMobile = (props) => {
  const { headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage, organizationLink, blogLink, sidebar, setSidebar, location } =
    props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSidebar = () => setSidebar(false);

  const activeLinkStyleMobile = {
    paddingLeft: '0.5rem',
    borderLeft: '2px solid white',
  };

  const intl = useIntl();
  const jaPage = intl.locale === 'ja';

  return (
    <nav className={sidebar ? headerStyle : `${headerStyle} justify-between`} style={{ zIndex: '100' }}>
      <div className="header__logo-container">
        <Link to={homePage} />
        {/* <StaticImage
            src="../../images/socious-logo.png"
            className="header__logo-image"
            alt="Socious brand logo"
          /> */}

      </div>
      {sidebar ?
        <Menu right customCrossIcon={false} isOpen={sidebar}>
          <div className='!flex justify-between pb-20'>
            <div className="header__logoblue-container">
              <Link to={homePage} />
              {/* <StaticImage
            src="../../images/socious-logo.png"
            className="header__logo-image"
            alt="Socious brand logo"
          /> */}

            </div>
            <CrossButtonSidebar handleClick={handleCloseSidebar} />
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
          <div className='!flex justify-center select-lang'>
            <a className="!flex m0 items-center gap-2" href={altPage}>
              {!jaPage ? <CheckMarkLang /> : <></>} English (US)
            </a>
            <div className='seperator-lang'></div>
            <a className="!flex m0 items-center gap-2" href={altPage}>
              {jaPage ? <CheckMarkLang /> : <></>}Japanese (日本)
            </a>
          </div>

          <button
            onClick={handleOpen}
            className='job-action__get'>
            <FormattedMessage
              id="get-socious"
            />
          </button>
          <BasicModal open={open} handleClose={handleClose} />
        </Menu>
        :
        <MenuIcon onClick={() => setSidebar(true)} className={`mr-3 fixed top-6 right-0 ${location.pathname == '/' ? '!fill-white' : '!fill-[#2f4786]'}`} />
      }
    </nav>
  );
};

export default NavbarMobile;
