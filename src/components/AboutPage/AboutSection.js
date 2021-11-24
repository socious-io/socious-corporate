import React from "react";

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import AboutItem from "./components/AboutItem";
import aboutItems from "../../../data/AboutPage/aboutSectionData";

const AboutSection = (props) => {
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
    <SimpleLocalize {...props}>
      <section>
        <div className="about-title" id="what-we-do">
          <h2>
            <FormattedMessage
              id="about-section-title"
            />
          </h2>
          <p>
            <FormattedMessage
              id="about-section-description"
            />
          </p>
        </div>

        <div className="about-section">
          {aboutComponents}
        </div>
      </section>
    </SimpleLocalize>
  )
}

export default AboutSection
