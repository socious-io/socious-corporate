import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { navigate } from 'gatsby'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Banner = (props) => {
  const { careersBackgroundImage } = useStaticQuery(
    graphql`
      query {
        careersBackgroundImage: file(relativePath: {eq: "andriyko-podilnyk-unsplash.jpg"}) {
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
    // `linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.2))`,
    `linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)`,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <BgImage image={backgroundFluidImageStack} className="hos-banner" alt='hos banner'>
        <div className="hos-banner__text">
          <p id="hos-banner__p">
            <FormattedMessage
              id="hos-banner"
            />
          </p>
          <p id="hos-description__p">
            <FormattedMessage
              id="hos-description"
            />
          </p>
        </div>
      </BgImage>
    </SimpleLocalize>
  )
}

export default Banner
