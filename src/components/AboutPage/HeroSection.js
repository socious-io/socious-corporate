import React from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Hero = (props) => {
  return (
    <SimpleLocalize {...props}>
      <div className="hero-section" id="our-mission">
        <div className="hero-text">
          <h5>
            <FormattedMessage
              id="about-hero-title"
            />
          </h5>
          <h1>
            <FormattedMessage
              id="about-hero-subtitle"
            />
          </h1>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default Hero
