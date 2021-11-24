import React from "react";

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import CompanyItem from "./components/CompanyItem";
import companyInfo from "../../../data/AboutPage/companySectionData";
import companyInfoJa from "../../../data/AboutPage/companySectionDataJa";

const CompanySection = (props) => {
  const { language } = props.pageContext
  const companyComponentLanguageSelector = language === 'ja' ? companyInfoJa : companyInfo

  const companyRow = companyComponentLanguageSelector.map(data => 
      <CompanyItem 
        key={data.id}
        title={data.title}
        info={data.info}
      />
    )

  return (
    <SimpleLocalize {...props}>
      <div className="company-section" id="company-profile">
        <div className="company-title">
          <h2>
            <FormattedMessage
              id="company-profile-header"
            />
          </h2>
        </div>
        <div className="company-content">
          {companyRow}
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default CompanySection
