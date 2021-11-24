import React from "react";

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

  return (
    <SimpleLocalize {...props}>
      <section>
        <div className="values-banner" id="our-values">
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
        </div>
        <div className="values-section">
          {values}
        </div>
      </section>
    </SimpleLocalize>
  )
}

export default ValuesSection
