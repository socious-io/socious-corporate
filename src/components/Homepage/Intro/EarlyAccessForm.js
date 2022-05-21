import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

export default class EarlyAccessForm extends React.Component {
  render() {
    return (
      <SimpleLocalize {...this.props}>
        <div className="section-intro__block intro-right-section">
          <div className="">
            <div className="section-intro__mailchimp">
              <FormattedMessage id="form-header-black" />
              <div className="section-intro__mailchimp--blue">
                <FormattedMessage id="form-header-blue-one" />
              </div>
            </div>
            <div className="section-app-links__subheader">
              <FormattedMessage id="app-links-subheader" />
            </div>

            <div className="section-app-links__app-links-block">
              <div className="section-app-links__app-links">
                <a
                  href="https://apps.apple.com/jp/app/socious/id1581904474"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="section-app-links__app-links-button">
                    <StaticImage
                      src="../../../images/apple.png"
                      alt="Download on Appstore"
                      loading="eager"
                      objectFit="cover"
                      width={180}
                    />
                  </button>
                </a>
              </div>
              <div className="section-app-links__app-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dissocialnetwork"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="section-app-links__app-links-button">
                    <StaticImage
                      src="../../../images/google.png"
                      alt="Get it on Google Play"
                      loading="eager"
                      objectFit="cover"
                      width={180}
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SimpleLocalize>
    );
  }
}
