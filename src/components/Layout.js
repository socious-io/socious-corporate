import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {IntlProvider} from 'react-intl';
import '../styles/main.scss';

import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const Layout = (props) => {
  const {
    pageContext: {language, messages},
    header,
    pageTitle,
    children,
  } = props;

  return (
    <IntlProvider defaultLocale="en" locale={language} messages={messages}>
      <title>
        <FormattedMessage id={pageTitle || 'site-title'} />
      </title>
      <div id="scroll-top"></div>
      <Navbar header={header} />
      <main>{children}</main>
      <Footer />
    </IntlProvider>
  );
};

export default Layout;
