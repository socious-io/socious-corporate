import React from "react";

const Reason = (props) => {
  return (
    <div className="section-jobs__list-item">
      <div className="section-jobs__list-container">
      <div className="section-jobs__list-icon">
        {props.icon}
      </div>
        <div className="section-jobs__list-item-subtitle">
          {props.subtitle}
        </div>
        <div className="section-jobs__list-item-title">
          <a href={props.link}>{props.linkName}</a>
        </div>
      </div>
    </div>
  )
}

export default Reason
