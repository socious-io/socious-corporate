import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MobileImageBlock = () => {
  return (
    <div className="section-intro__block">
      <StaticImage
        src="../../../images/socious-company.png"
        alt="socious app illustration"
        className="section-intro__app-image"
        placeholder="blurred"
        loading="eager"
        objectFit="contain"
      />
      <div className="section-intro__app-image-blue-square"></div>
      <div className="section-intro__app-image-paleblue-square"></div>
    </div>
  )
}

export default MobileImageBlock
