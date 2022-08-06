import React from "react";

import Video from "../../../GifVideo"
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

const Feature = (props) => {

 
  return (
   
    <div className="section-features__list-item">
      
     
      <div className="section-features__list-video">
      <Player>
      <source src={props.gifUrl}/>
    </Player>  

      </div>

      <div className="section-features__list-content">
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
