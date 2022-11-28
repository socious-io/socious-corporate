import React, { useState } from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import { useIntl } from 'react-intl';
import { FormattedMessage } from "react-intl";
import CrossButtonSidebar from './CrossButtonSidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CheckMarkLang from './CheckMarkLang';
import QRModal from '../shared/QR-Modal';
import { getImage, StaticImage } from "gatsby-plugin-image";


const NavbarMobile = (props) => {
  const { headerStyle, homePage, aboutLink, careersLink, newsroomLink, altPage, organizationLink, blogLink, sidebar, setSidebar, location, is404Page } =
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
      {
        sidebar ?
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

            <Link
              to={"/app/auth/login"}
              activeStyle={activeLinkStyleMobile}
              partiallyActive={true}
              className="menu-item"
            >
              {jaPage ? 'ログイン' : 'Sign in '}&#8594;
            </Link>
            <Link
              to={"/app/auth/signup"}
              activeStyle={activeLinkStyleMobile}
              partiallyActive={true}
              className="menu-item"
            >
              {jaPage ? 'サインアップ' : 'Sign up '}&#8594;
            </Link>
            <br></br>

            <div
              style={activeLinkStyleMobile}
              className="menu-item"
            >
              {jaPage ? 'ダウンロード' : 'Download app'}
            </div>

                <a
                  href="https://apps.apple.com/jp/app/socious/id1581904474"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../../images/appstore.png"
                    alt="Download on Appstore"
                    loading="eager"
                    objectFit="cover"
                    width={180}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dissocialnetwork"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../../images/googleplay.png"
                    alt="Get it on Google Play"
                    loading="eager"
                    objectFit="cover"
                    width={180}
                  />
                </a>

            {/* <button
              onClick={handleOpen}
              className='job-action__get'>
              <FormattedMessage
                id="get-socious"
              />
            </button>
            <QRModal open={open} handleClose={handleClose} /> */}
          </Menu>
          :
          <MenuIcon onClick={() => setSidebar(true)} fontSize="large" className={`fixed top-[8vw] right-[10vw] ${location.pathname == '/' || is404Page ? '!fill-white' : '!fill-[#2f4786]'}`} />
      }
    </nav>
  );
};

export default NavbarMobile;
