import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {useStaticQuery, graphql} from 'gatsby';
import {IntlProvider} from 'react-intl';
import '../styles/main.scss';

import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const Layout = ({pageContext: {language, messages}, pageTitle, children}) => {
  return (
    <IntlProvider defaultLocale="en" locale={language} messages={messages}>
      <div>
        <title>
          <FormattedMessage id={pageTitle || 'site-title'} />
        </title>
        <div id="scroll-top"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default Layout;
