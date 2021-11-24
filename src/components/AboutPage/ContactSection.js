import React from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import ContactItem from './components/ContactItem'
import contactItems from '../../../data/AboutPage/contactSectionData'
import contactItemsJa from '../../../data/AboutPage/contactSectionDataJa'

const ContactSection = (props) => {
  const { language } = props.pageContext
  const contactComponentLanguageSelector = language === 'ja' ? contactItemsJa : contactItems

  const contactInfo = contactComponentLanguageSelector.map(item => 
      <ContactItem 
        key={item.id}
        header={item.header}
        content={item.content}
      />
    )

  return (
    <SimpleLocalize {...props}>
      <div className="contact-section" id="contact-us">
        <div className="contact-title">
          <h2>
            <FormattedMessage
              id="contact-section-header"
            />
          </h2>
        </div>
        <div className="contact-container">
          {contactInfo}
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default ContactSection
