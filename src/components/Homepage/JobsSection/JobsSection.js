import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Job from "./Job";
import jobsSectionLeft from "../../../../data/Homepage/jobSectionLeft"
import jobsSectionLeftJa from "../../../../data/Homepage/jobSectionLeftJa"


const JobsSection = (props) => {
  const { language } = props.pageContext

  const leftLanguageSelector = language === 'ja' ? jobsSectionLeftJa : jobsSectionLeft

  const jobItemsLeft = leftLanguageSelector.map(job =>
    <Job
      icon={job.icon}
      key={job.id}
      title={job.title}
      subtitle={job.subtitle}
    />
  )



  return (
    <SimpleLocalize {...props}>
      <div className="section-jobs !pb-8">
        <div className="section-jobs__block">
          <div className="section-jobs__list">
            <div className="section-jobs__sup-header">
              <FormattedMessage
                id="benefits-caption"
              />
            </div>
            <div className="section-jobs__header">
              <FormattedMessage
                id="benefits-header-left"
              />
            </div>
            <div className="section-jobs__header">
              <FormattedMessage
                id="benefits-header-bottom"
              />
            </div>
          </div>
          <div className="!flex-row xxs:!gap-4 mdp:!gap-0 gap-0 px-4 xxs:!flex-col mdp:!flex-row  !w-[90%] section-jobs__list-jobs">{jobItemsLeft}</div>

        </div>
      </div>
    </SimpleLocalize>
  )
}

export default JobsSection
