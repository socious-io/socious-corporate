import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class EarlyAccessForm extends React.Component {
    state = {
        fullName: "",
        email: "",
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
          <div className="section-intro__block">
            <div className="section-intro__mailchimp">
              Join the world’s largest
              <div className="section-intro__mailchimp--blue">
                social impact<br />
                community
              </div>
            </div>
            <div className="section-intro__mailchimp__form-container">
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
                    <h2>Get Early Access</h2>
                    <div className="indicates-required">
                      <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-name">Full Name </label>
                      <input
                        type="text"
                        value={this.state.fullName}
                        name="name"
                        onChange={this._handleChange}
                        id="mce-name"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL"
                        >Email Address <span className="asterisk">*</span>
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
                        style={{display: 'none'}}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{display: 'none'}}
                      ></div>
                    </div>
                    <div
                      style={{position: 'absolute', left: '-5000px'}}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_131eb0c7f6b2c3a36daf52940_521f139131"
                        tabIndex="-1"
                      />
                    </div>
                    <div className="clear">
                      <button
                        id="mc-embedded-subscribe"
                        className="button"
                      >
                        Get Early Access
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}


