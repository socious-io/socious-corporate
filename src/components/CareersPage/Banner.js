import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Banner = (props) => {
  const { careersBackgroundImage } = useStaticQuery(
    graphql`
      query {
        careersBackgroundImage: file(relativePath: {eq: "careers-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 100,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(careersBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.2))`,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <BgImage image={backgroundFluidImageStack} className="career-banner">
        <div className="career-banner__text">
          <h1>
            <FormattedMessage
              id="careers-banner"
            />
          </h1>
        </div>
      </BgImage>
    </SimpleLocalize>
  )
}

export default Banner
