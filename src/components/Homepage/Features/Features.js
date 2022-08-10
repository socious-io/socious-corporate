import React, {useEffect} from "react";

import 'video-react/dist/video-react.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Feature = (props) => {


  const image = getImage(props.gifOpt)

  return (
   
    <div className="section-features__list-item">
      
     <div     
     className="section-features__list-image-container">
     <GatsbyImage image={image} alt={props.gifAlt} className="section-features__list-image"/>
      </div>

      <div 
    
      className="section-features__list-content">
      <div className="section-features__list-slide">
        {props.slide}
      </div>
        <div className="section-features__list-item-title">
          {props.title}
        </div>
        <div className="section-features__list-item-subtitle">
          {props.subtitle}
        </div>
        <div className="section-features__list-item-link">
          <a href={props.linkUrl}>{props.link}&rarr;</a>          
        </div>
        </div>
    </div>
  
   
  )
}

export default Feature
