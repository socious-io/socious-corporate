import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const IssueSection = (props) => {

  return (
    <SimpleLocalize {...props}>
      <div className="issue-section" id="social-issues">
        <div className="issue-banner">
          {/* <div className="issue-banner__image"></div> */}
          <div className="issue-banner__content">
            <div className='issue-banner__content-one'>
              <FormattedMessage
                id="issue-section-body-one"
              />
              <br/><br/>
              <FormattedMessage
                id="issue-section-body-two"
              />
                <br/><br/>
                <FormattedMessage
                id="issue-section-body-three"
              />
            </div>
            <div className='issue-banner__content-two'>
            <FormattedMessage
                id="issue-section-body-four"
              />
               <br/><br/>
            <FormattedMessage
                id="issue-section-body-five"
              />
            </div>
          </div>
        </div>
        {/* {issues} */}
      </div>
    </SimpleLocalize>
  )
}

export default IssueSection
