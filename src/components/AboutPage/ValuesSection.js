import React from "react";

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import ValueItem from "./components/ValueItem";
import valueItems from "../../../data/AboutPage/valuesSectionData";
import valueItemsJa from "../../../data/AboutPage/valuesSectionDataJa";

const ValuesSection = (props) => {
  const { language } = props.pageContext
  const valuesComponentLanguageSelector = language === 'ja' ? valueItemsJa : valueItems

  const values = valuesComponentLanguageSelector.map(value => 
    <ValueItem 
      key={value.id}
      header={value.header}
      content={value.content}
    />
  )

  const { valuesBackgroundImage } = useStaticQuery(
    graphql`
      query {
        valuesBackgroundImage: file(relativePath: {eq: "values-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 60,
              webpOptions: {quality: 80}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(valuesBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.3))`,
  ].reverse();

  return (
    <SimpleLocalize {...props}>
      <section>
        <BgImage image={backgroundFluidImageStack} className="values-banner" id="our-values">
          <h2>
            <FormattedMessage
              id="values-title"
            />
          </h2>
          <p>
            <FormattedMessage
              id="values-description"
            />
          </p>
        </BgImage>
        <div className="values-section">
          {values}
        </div>
      </section>
    </SimpleLocalize>
  )
}

export default ValuesSection
