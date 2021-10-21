import React from "react";

const Issue = (props) => {
  return (
    <div class="issue-item">
      <div class="issue-item__header">
        <h3>{props.header}</h3>
      </div>
      <div class="issue-item__content">
        <p>
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default Issue
