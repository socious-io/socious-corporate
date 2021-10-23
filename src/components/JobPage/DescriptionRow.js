import React from "react";

const DescriptionRow = (props) => {
  return (
    <div className="description-row">
      <div className="description-header">
        <h3>{props.header}</h3>
      </div>
      <div className="description-content">
        {props.content}
      </div>
    </div>
  )
}

export default DescriptionRow
