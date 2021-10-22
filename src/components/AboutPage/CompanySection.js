import React from "react";

import CompanyItem from "./components/CompanyItem";
import companyInfo from "../../../data/AboutPage/companySectionData";

const CompanySection = () => {
  const companyRow = companyInfo.map(data => 
      <CompanyItem 
        key={data.id}
        title={data.title}
        info={data.info}
      />
    )

  return (
    <div className="company-section" id="company-profile">
      <div className="company-title">
        <h2>Socious Company Profile</h2>
      </div>
      <div className="company-content">
        {companyRow}
      </div>
    </div>
  )
}

export default CompanySection
