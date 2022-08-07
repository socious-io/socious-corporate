import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SkillItem = (props) => {

  const image = getImage(props.imageOpt)

  return (
    <div className="skills-item">
      <div className="skills-image">
        <GatsbyImage image={image} alt={props.imageAlt} />
      </div>
    </div>
  )
}

export default SkillItem
