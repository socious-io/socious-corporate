import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Hero = (props) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        imageOne: file(relativePath: {eq: "about-banner-1.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 200,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
        imageTwo: file(relativePath: {eq: "about-banner-2.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 200,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
        imageThree: file(relativePath: {eq: "about-banner-3.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 200,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  );



 
  const pluginImage = getImage(images)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.2))`,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <div className='hero-section'>
      <GatsbyImage image={pluginImage} />
      {/* <GatsbyImage image={pluginImage} /> */}
        <div className="hero-text">
          <h5 className='hero-text-header'>
            <FormattedMessage
              id="mission-header"
            />
          </h5>
          <h1>
            <FormattedMessage
              id="mission-statement"
            />
          </h1>
        </div>
        </div>
     
    </SimpleLocalize>
  )
}

export default Hero
