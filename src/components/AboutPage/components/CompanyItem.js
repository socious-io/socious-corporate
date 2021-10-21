import React from 'react'

const CompanyItem = (props) => {
  return (
    <div class="content-row">
      <div class="content-title">
        <p>{props.title}</p>
      </div>
      <div class="content-info">
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default CompanyItem
