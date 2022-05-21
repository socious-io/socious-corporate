import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

export default class AppLinks extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`);

        if (result !== "success") {
          throw msg;
        }
        alert(msg);
      })
      .catch((err) => {
        console.log("err", err);
        alert(err);
      });
  };

  render() {
    return (
      <SimpleLocalize {...this.props}>
        <div className="section-app-links">
          <div className="section-app-links__wrapper">
            <div className="section-app-links__container">
              <div className="section-app-links__header">
                <FormattedMessage id="app-links-header" />
              </div>
              <div className="section-app-links__subheader">
                <FormattedMessage id="sign-up-newsletter" />
              </div>
            </div>
            <div id="mc_embed_signup">
              <form
                onSubmit={this._handleSubmit}
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2>
                    <FormattedMessage id="form-title" />
                  </h2>
                  <div className="indicates-required">
                    <span className="asterisk">*</span>
                    <FormattedMessage id="form-required" />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-name">
                      <FormattedMessage id="form-full-name" />
                    </label>
                    <input
                      type="text"
                      value={this.state.fullName}
                      name="fullName"
                      onChange={this._handleChange}
                      id="mce-name"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      <FormattedMessage id="form-email" />
                      <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value={this.state.email}
                      name="email"
                      onChange={this._handleChange}
                      className="required email"
                      id="mce-email"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_131eb0c7f6b2c3a36daf52940_521f139131"
                      tabIndex="-1"
                    />
                  </div>
                  <div>
                    <button id="mc-embedded-subscribe" className="button">
                      <FormattedMessage id="form-button" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SimpleLocalize>
    );
  }
}
