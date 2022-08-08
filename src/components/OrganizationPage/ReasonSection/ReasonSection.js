import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Reason from "./Reason";
import reasonItem from "../../../../data/OrganizationPage/reasonSection";
import reasonItemJa from "../../../../data/OrganizationPage/reasonSectionJa";


const ReasonsSection = (props) => {
  const { language } = props.pageContext

  const reasonLanguageSelector = language === 'ja' ? reasonItemJa : reasonItem

  const reasonItems = reasonLanguageSelector.map(reason => 
      <Reason
        icon={reason.icon}
        key={reason.id}
        subtitle={reason.subtitle}
        link={reason.link}
        linkName={reason.linkName}
      />
  )

    
  return (
    <SimpleLocalize {...props}>
      <div className="section-reason">
        <div className="section-jobs__block">
          <div className="section-jobs__list">
            <div className="section-jobs__sup-header">
              <FormattedMessage
                id="organization-reason-title"
              />
            </div>
            <div className="section-jobs__header">
              <FormattedMessage
                id="organization-reason-description"
              />
               </div>
               </div>
              <div className="section-reason__list-jobs">{reasonItems}</div>
           
          </div>
      </div>
    </SimpleLocalize>
  )
}

export default ReasonsSection
