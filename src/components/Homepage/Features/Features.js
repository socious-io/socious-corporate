import React from "react";

import 'video-react/dist/video-react.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby';
import { BgImage } from 'gbimage-bridge';

const Feature = (props) => {
  const image = getImage(props.gifOpt)
  const { gifBackgroundImage } = useStaticQuery(
    graphql`
      query {
        gifBackgroundImage: file(relativePath: {eq: "gif/Rectangle.png"}) {
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

 const background = getImage(gifBackgroundImage)
  return (
   
    <div className="section-features__list-item">
      
     <div className="section-features__list-image-container">
     <GatsbyImage image={image} alt={props.gifAlt} className="section-features__list-image"/>
      {/* <BgImage image={background}className="section-features__list-image-container-two" >
     

      </BgImage> */}
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
