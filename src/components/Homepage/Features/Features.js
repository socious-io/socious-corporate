import React from "react";

const Feature = ({ feature }) => {
  return (
    <>
      <div className="section-features__list-slide">
        {feature.slide}
      </div>
      <div className="section-features__list-item-title">
        {feature.title}
      </div>
      <div className="section-features__list-item-subtitle">
        {feature.subtitle}
      </div>
      <div className="section-features__list-item-link">
        <a href={feature.linkUrl}
        target="_blank"
        >{feature.link}&rarr;</a>
      </div>
    </>
  )
}

export default Feature
