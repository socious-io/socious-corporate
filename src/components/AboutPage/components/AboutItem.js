import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutItem = (props) => {
  const aboutItemBorder = {
    borderTop: '1px solid rgba(10,10,10,0.1)'
  }

  const image = getImage(props.imageOpt.childImageSharp.gatsbyImageData)

  return (
    <div className="about-item" style={aboutItemBorder}>
      <div className="about-image">
        <GatsbyImage image={image} alt={props.imageAlt} />
      </div>
      <div className="about-info">
        <div className="about-header">
          <h3>
            {props.header}
          </h3>
        </div>
        <div className="about-content">
          <p>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutItem
