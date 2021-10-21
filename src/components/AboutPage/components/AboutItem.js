import React from 'react'

const AboutItem = (props) => {
  const aboutItemBorder = {
    borderTop: '1px solid rgba(10,10,10,0.1)'
  }

  return (
    <div class="about-item" style={aboutItemBorder}>
      <div class="about-image">
        <img src={props.imageUrl} alt={props.imageAlt} />
      </div>
      <div class="about-info">
        <div class="about-header">
          <h3>
            {props.header}
          </h3>
        </div>
        <div class="about-content">
          <p>
            {props.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutItem
