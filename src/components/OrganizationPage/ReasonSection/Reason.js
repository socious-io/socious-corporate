import React from "react";

const Reason = (props) => {
  return (
    <div className="section-reason__list-item">
      <div className="section-reason__list-container">
      <div className="section-reason__list-icon">
        {props.icon}
      </div>
        <div className="section-reason__list-item-subtitle">
          {props.subtitle}
        </div>
        <div className="section-reason__list-item-link">
          <a href={props.link}>{props.linkName}</a>
        </div>
      </div>
    </div>
  )
}

export default Reason
