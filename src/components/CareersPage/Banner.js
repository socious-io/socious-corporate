import React from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Banner = (props) => {
  return (
    <SimpleLocalize {...props}>
      <div className="career-banner">
        <div className="career-banner__text">
          <h1>
            <FormattedMessage
              id="careers-banner"
            />
          </h1>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default Banner
