import * as React from 'react'


const Intro = () => {
  return (
    <div className="app__container">
      <div className="section-intro">
        <div className="section-intro__block">
          <div className="section-intro__app-image"></div>
          <div className="section-intro__app-image-blue-square"></div>
          <div className="section-intro__app-image-paleblue-square"></div>
        </div>
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
                action="https://socious.us6.list-manage.com/subscribe/post?u=131eb0c7f6b2c3a36daf52940&amp;id=521f139131"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Get Early Access</h2>
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-FNAME">Full Name </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      className=""
                      id="mce-FNAME"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-EMAIL"
                      >Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
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
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Get Early Access"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
