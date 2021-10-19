import React from "react";

const Job = (props) => {
  console.log(props)

  return (
    <div className="section-jobs__list-item">
      <div className="section-jobs__list-icon">
        {props.icon}
      </div>
      <div>
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
