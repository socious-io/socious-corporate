import React from 'react'

import ContactItem from './components/ContactItem'
import contactItems from '../../../data/AboutPage/contactSectionData'

const ContactSection = () => {
  const contactInfo = contactItems.map(item => 
      <ContactItem 
        key={item.id}
        header={item.header}
        content={item.content}
      />
    )

  return (
    <div className="contact-section" id="contact-us">
      <div className="contact-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-container">
        {contactInfo}
      </div>
    </div>
  )
}

export default ContactSection
