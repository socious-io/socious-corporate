import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SkillItem = (props) => {

  const image = getImage(props.imageOpt)

  return (
    <div className="skills-item pr-2 pl-2">
      <Link to={props.link} target="_blank">
        <div className="featured-in-image">
          <GatsbyImage image={image} alt={props.imageAlt}/>
        </div>
      </Link>
    </div>
  )
}

export default SkillItem
