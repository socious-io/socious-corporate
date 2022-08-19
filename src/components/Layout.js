import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl';
import '../styles/main.scss';
import { createTheme } from "@material-ui/core/styles";
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { ThemeProvider } from '@emotion/react'

const muiTheme = createTheme()
const theme = {
  colors: {
    primary: '#2f4786',
    ['primary-bg']: '#2f4786',
    ['primary-dark']: '#1f2f59',
    ['primary-light']: '#92a8e3',
    ['light-grey']: 'rgba(10, 10, 10, 0.3)',
    ['dark-grey']: 'rgba(10, 10, 10, 0.8)',
    black: '#020305',
    white: '#ffffff',
    green: '#00BA88',
    ['extra-light-grey']: '#f8f8f8',
    secondary: '#2F8647',
  }
}

const Layout = (props) => {
  const {
    pageContext: { language, messages },
    header,
    pageTitle,
    children,
  } = props;

  return (
    <IntlProvider defaultLocale="en" locale={language} messages={messages}>
      <ThemeProvider theme={{ ...theme, ...muiTheme }}>
        <title>
          <FormattedMessage id={pageTitle || 'site-title'} />
        </title>
        <div id="scroll-top"></div>
        <Navbar header={header} />
        {children}
        <Footer />
      </ThemeProvider>
    </IntlProvider>
  );
};

export default Layout;
