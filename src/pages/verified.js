import React from 'react';
import {IntlProvider} from 'react-intl';
import Seo from '../components/seo';
import '../styles/verified.scss';

const VerifiedPage = (props) => {
  const {
    pageContext: {language, messages},
  } = props;

  return (
    <IntlProvider defaultLocale="en" locale={language} messages={messages}>
      <Seo title="Account verified" />
      <div className="body">
        <div className="header">
          <img
            className="icon"
            src="../images/socious-logo.png"
            alt="Socious brand logo"
          />
          <div className="textHeader">Socious</div>
        </div>
        <div className="title">
          Account verified
          <br />
          アカウント認証完了
        </div>
        <div className="content">
          Congratulations! Your email address has been successfully verified.
          Now you can enjoy Socious.
        </div>
        <div className="content">
          おめでとうございます!
          アカウント認証が完了しました。ソーシャスをお使いいただけます。
        </div>
      </div>
    </IntlProvider>
  );
};

export default VerifiedPage;
