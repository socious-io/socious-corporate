import React from "react";

const IssueItem = (props) => {
  return (
    <div className="issue-item">
      <div className="issue-item__header">
        <h3>{props.header}</h3>
      </div>
      <div className="issue-item__content">
        <p>
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default IssueItem
