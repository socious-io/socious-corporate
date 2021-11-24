import React from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

// import issueItems from '../../../data/AboutPage/issueSectionData'
// import IssueItem from './components/IssueItem'

const IssueSection = (props) => {
  // const issues = issueItems.map(issue => 
  //   <IssueItem
  //     key={issue.id}
  //     header={issue.header}
  //     content={issue.content}
  //   />
  // )

  return (
    <SimpleLocalize {...props}>
      <div className="issue-section" id="social-issues">
        <div className="issue-banner">
          <div className="issue-banner__image"></div>
          <div className="issue-banner__content">
            <h2>
              <FormattedMessage
                id="issue-section-title"
              />
            </h2>
            <p>
              <FormattedMessage
                id="issue-section-body-one"
              />
              <br/><br/>
              <FormattedMessage
                id="issue-section-body-two"
              />
            </p>
          </div>
        </div>
        {/* {issues} */}
      </div>
    </SimpleLocalize>
  )
}

export default IssueSection
