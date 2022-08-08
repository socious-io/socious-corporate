import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TalentItem = (props) => {

  const image = getImage(props.imageOpt)

  return (
    <div className="talents-item">
      <div className="talents-image">
        <GatsbyImage image={image} alt={props.imageAlt} />
      </div>
    </div>
  )
}

export default TalentItem
