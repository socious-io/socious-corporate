import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutItem = (props) => {


  const image = getImage(props.imageOpt)

  return (
    <div className="about-item" >
      <div className="about-image">
        <GatsbyImage image={image} alt={props.imageAlt} />
      </div>
      <div className="about-info">
        <div className="about-header"> 
            {props.header}
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
