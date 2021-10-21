import React from "react";

import AboutItem from "./components/AboutItem";
import aboutItems from "../../../data/aboutSectionData";

const AboutSection = () => {
  const aboutComponents = aboutItems.map(item => 
    <AboutItem
      key={item.id}
      imageUrl={item.imageUrl}
      imageAlt={item.imageAlt}
      header={item.header}
      content={item.content}
    />
  )
  
  return (
    <section>
      <div className="about-title" id="what-we-do">
        <h2>What we do</h2>
        <p>
          We leverage the untapped potential of passive social change makers by helping them contribute to society in an easy, fun way through a purpose-driven
          community app, AI recommendations, and community currency.
        </p>
      </div>

      <div className="about-section">
        {aboutComponents}
      </div>
    </section>
  )
}

export default AboutSection
