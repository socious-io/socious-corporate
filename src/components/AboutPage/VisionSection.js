import React from "react";

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const VisionSection = (props) => {
  return (
    <SimpleLocalize {...props}>
      <div className="vision-section" id="our-vision">
        <div className="vision-image">
          <div className="content-header">
            <h3>
              <FormattedMessage
                id="vision-title"
              />
            </h3>
          </div>

        </div>
        <div className="vision-content">
          <div className="content-main">
            <p>
              <FormattedMessage
                id="vision-description"
              />
            </p>
          </div>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default VisionSection
