import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Hero = (props) => {
  const images = useStaticQuery(
    graphql`
      query {
        imageOne: file(relativePath: {eq: "about-landing-image.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 600,
              height:700
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
        
      }
    `
  );


  const { imageOne } = images;
  const aboutImage = [imageOne]

  const pluginImage = getImage(aboutImage[0])


  return (
    <SimpleLocalize {...props}>
      <div className='!mt-4 xxs:!flex-col xxs:!gap-8 !justify-center mdp:!flex-row xxs:!pt-56 mdp:!pt-20 hero-section'>

        <div className="xxs:!mx-4 hero-text">
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
        <div className='!flex !self-center hero-image-holder'>
          <GatsbyImage style={{ maxWidth: '340px' }} image={pluginImage} alt="about image" className='hero-image' />
        </div>
      </div>

    </SimpleLocalize>
  )
}

export default Hero
