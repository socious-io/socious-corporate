import React from "react";

const Job = (props) => {
  return (
    <div className="flex-1 section-jobs__list-item">
      <div className="section-jobs__list-container">
        <div className="flex !h-auto w-auto !p-[2px] section-jobs__list-icon">
          {props.icon}
        </div>
        <div className="section-jobs__list-item-title">
          {props.title}
        </div>
        <div className="section-jobs__list-item-subtitle">
          {props.subtitle}
        </div>
      </div>
    </div>
  )
}

export default Job
