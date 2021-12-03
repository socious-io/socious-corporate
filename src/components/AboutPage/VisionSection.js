import React, { useState, useEffect } from "react";

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const VisionSection = (props) => {
  const [windowWidth, setWindowWidth] = useState(null)
  
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    function currentWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", currentWidth)
    return () => {
      window.removeEventListener("resize", currentWidth)
    }
  }, [])

  const { visionBackgroundImage } = useStaticQuery(
    graphql`
      query {
        visionBackgroundImage: file(relativePath: {eq: "vision-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 70,
              webpOptions: {quality: 80}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(visionBackgroundImage)
  const linearGradientSelector = windowWidth > 1015 ? 
                                 `linear-gradient(to right, rgba(10, 10, 10, 0.3), #2669a0)`
                                 : `linear-gradient(to bottom, rgba(10, 10, 10, 0.3), #2669a0)`
  
  const backgroundFluidImageStack = [
    pluginImage,
    linearGradientSelector,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <div className="vision-section" id="our-vision">
        <BgImage image={backgroundFluidImageStack} className="vision-image">
          <div className="content-header">
            <h3>
              <FormattedMessage
                id="vision-title"
              />
            </h3>
          </div>
        </BgImage>
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
