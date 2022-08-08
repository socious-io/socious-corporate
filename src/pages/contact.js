import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactPage/Contact';




const ContactPage = (props) => {
  return (
    <Layout {...props} header="" >
      <Seo key="organization" />
      <ContactForm {...props} />

    </Layout>
  );
};

export default ContactPage;
