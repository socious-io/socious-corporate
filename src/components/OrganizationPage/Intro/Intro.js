import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import SimpleLocalize from '../../shared/SimpleLocalize';
import { FormattedMessage } from 'react-intl';

const Intro = (props) => {
  const { orgBackgroundImage } = useStaticQuery(
    graphql`
      query {
        orgBackgroundImage: file(relativePath: {eq: "org-banner.png"}) {
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

  const pluginImage = getImage(orgBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  return (
     <SimpleLocalize {...props}>
     <BgImage image={backgroundFluidImageStack} className="section-intro">
       <div className="intro-banner__text">
         <h1>
           <FormattedMessage
             id="organization-hero-header"
           />
         </h1>
         <h3> 
         <FormattedMessage
             id="organization-hero-subtitle"
           /></h3>

         <div className="section-app-links__app-links-block">
              <div className="section-app-links__app-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="section-app-links__app-links-button-work">
                Start hiring
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
