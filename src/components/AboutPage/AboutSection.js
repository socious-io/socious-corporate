import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import AboutItem from "./components/AboutItem";
import aboutItems from "../../../data/AboutPage/aboutSectionData";
import aboutItemsJa from "../../../data/AboutPage/aboutSectionDataJa";

const AboutSection = (props) => {
  const data = useStaticQuery(graphql`
    query AboutSection {
      collaborate: file(relativePath: {eq: "collaborate.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      development: file(relativePath: {eq: "development.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      environment: file(relativePath: {eq: "environment.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
    }
  `)

  const { collaborate, development, environment } = data
  const aboutImages = [collaborate, development, environment]

  const { language } = props.pageContext
  const aboutComponentLanguageSelector = language === 'ja' ? aboutItemsJa : aboutItems

  const aboutComponents = aboutComponentLanguageSelector.map(item => 
    <AboutItem
      key={item.id}
      imageOpt={aboutImages[item.id - 1]}
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
