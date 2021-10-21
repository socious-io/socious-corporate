import React from "react";

import CompanyItem from "./components/CompanyItem";
import companyInfo from "../../../data/companySectionData";

const CompanySection = () => {
  const companyRow = companyInfo.map(data => 
      <CompanyItem 
        id={data.id}
        title={data.title}
        info={data.info}
      />
    )

  return (
    <div class="company-section" id="company-profile">
      <div class="company-title">
        <h2>Socious Company Profile</h2>
      </div>
      <div class="company-content">
        {companyRow}
      </div>
    </div>
  )
}

export default CompanySection
