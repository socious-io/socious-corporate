import * as React from 'react';

import MobileImageBlock from './MobileImageBlock';
import EarlyAccessForm from './EarlyAccessForm';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import SimpleLocalize from '../../shared/SimpleLocalize';
import { FormattedMessage } from 'react-intl';

const Intro = (props) => {
  const { introBackgroundImage } = useStaticQuery(
    graphql`
      query {
        introBackgroundImage: file(relativePath: {eq: "homepage-banner-2.png"}) {
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

  const pluginImage = getImage(introBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  return (
     <SimpleLocalize {...props}>
     <BgImage image={backgroundFluidImageStack} className="section-intro">
       <div className="intro-banner__text">
         <h1>
           {/* <FormattedMessage
             id="careers-banner"
           /> */}
           Join the impact work revolution
         </h1>
         <h3> Socious is your gateway to a world of work opportunities that are meaningful to you and impactful for the world.</h3>

         <div className="section-app-links__app-links-block">
              <div className="section-app-links__app-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="section-app-links__app-links-button-work">
                Find work
                  </button>
                </a>
              </div>
              <div className="section-app-links__app-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="section-app-links__app-links-button">
                   Hire talents
                  </button>
                </a>
              </div>
            </div>
       </div>
     </BgImage>
   </SimpleLocalize>
  )
}

export default Intro
