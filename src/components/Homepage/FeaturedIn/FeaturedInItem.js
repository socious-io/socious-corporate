import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SkillItem = (props) => {

  const image = getImage(props.imageOpt)

  return (
    <div className="skills-item pr-2 pl-2">
      <div className="featured-in-image">
        <GatsbyImage image={image} alt={props.imageAlt}/>
      </div>
    </div>
  )
}

export default SkillItem
