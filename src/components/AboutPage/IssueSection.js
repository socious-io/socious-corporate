import React from 'react'

import issueItems from '../../../data/AboutPage/issueSectionData'
import IssueItem from './components/IssueItem'

const IssueSection = () => {
  const issues = issueItems.map(issue => 
    <IssueItem
      key={issue.id}
      header={issue.header}
      content={issue.content}
    />
  )

  return (
    <div className="issue-section" id="social-issues">
      <div className="issue-banner">
        <div className="issue-banner__image"></div>
        <div className="issue-banner__content">
          <h2>Social Issues We Are Solving</h2>
          <p>
            The resources needed to solve social issues are scattered, unmatched and limited
            <br/><br/>
            While many are interested in contributing to social change, only few are able to do so
          </p>
        </div>
      </div>
      {/* {issues} */}
    </div>
  )
}

export default IssueSection
