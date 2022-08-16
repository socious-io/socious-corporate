import React, { useEffect } from "react";

import 'video-react/dist/video-react.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Feature = (props) => {


  const image = getImage(props.gifOpt)

  return (
    <section className="flex items-center pt-14 justify-center bg-pattern-striped">
      <div className={`${(props.idx - 1) % 2 != 0 ? '!flex-row' : '!flex-row-reverse'} xxs:!flex-col ${(props.idx - 1) % 2 != 0 ? 'sm:!flex-row' : 'sm:!flex-row-reverse'} gap-2 section-features__list-item`}>

        <div
          className="flex-1 py-10 section-features__list-image-container">
          <img src={props.gifOpt} alt={props.gifAlt} className="!max-h-[23em] section-features__list-image" />
        </div>

        <div

          className="flex-1 section-features__list-content">
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
    </section>

  )
}

export default Feature
