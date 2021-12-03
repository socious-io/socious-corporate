import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const IssueSection = (props) => {
  const { issuesBackgroundImage } = useStaticQuery(
    graphql`
      query {
        issuesBackgroundImage: file(relativePath: {eq: "issues-banner.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 60,
              webpOptions: {quality: 80}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(issuesBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(to right, rgba(10,10,10,0.2), rgba(255, 255, 255, 1))`,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <div className="issue-section" id="social-issues">
        <div className="issue-banner">
          <BgImage image={backgroundFluidImageStack} className="issue-banner__image" />
          {/* <div className="issue-banner__image"></div> */}
          <div className="issue-banner__content">
            <h2>
              <FormattedMessage
                id="issue-section-title"
              />
            </h2>
            <p>
              <FormattedMessage
                id="issue-section-body-one"
              />
              <br/><br/>
              <FormattedMessage
                id="issue-section-body-two"
              />
            </p>
          </div>
        </div>
        {/* {issues} */}
      </div>
    </SimpleLocalize>
  )
}

export default IssueSection
