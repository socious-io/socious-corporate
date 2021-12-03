import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Hero = (props) => {
  const { heroBackgroundImage } = useStaticQuery(
    graphql`
      query {
        heroBackgroundImage: file(relativePath: {eq: "hero-banner.png"}) {
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

  const pluginImage = getImage(heroBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.2))`,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <BgImage image={backgroundFluidImageStack} className="hero-section" id="our-mission">
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
      </BgImage>
    </SimpleLocalize>
  )
}

export default Hero
