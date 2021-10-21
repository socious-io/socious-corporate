import React from 'react'

import issueItems from '../../../data/issueItems'
import Issue from './components/Issue'

const IssueSection = () => {
  const issues = issueItems.map(issue => 
    <Issue
      key={issue.id}
      header={issue.header}
      content={issue.content}
    />
  )

  return (
    <div class="issue-section" id="social-issues">
      <div class="issue-banner">
        <div class="issue-banner__image"></div>
        <div class="issue-banner__content">
          <h2>Social Issues We Are Solving</h2>
          <p>The resources needed to solve social issues are scattered, unmatched and limited</p>
        </div>
      </div>
      {issues}
    </div>
  )
}

export default IssueSection
