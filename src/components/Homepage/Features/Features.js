import React from "react";
import styled from "@emotion/styled";

const FeatureContent = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

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
