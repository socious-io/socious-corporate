import React from "react";

const Job = (props) => {
  return (
    <div className="flex-1 !min-w-[15em] !min-h-[11em] section-jobs__list-item">
      <div className="!w-[60%] section-jobs__list-container">
        <div className="flex !h-auto w-auto !p-[10px] section-jobs__list-icon">
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
