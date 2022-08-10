import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/Layout';





const AcceptedPage = (props) => {
  return (
    <Layout {...props} header="" >
      <Seo key="organization" />
      <section className='form-holder'>
        <h2 className='form-feedback-header'>We’d love to hear from you!</h2>
      <div className='form-feedback'>
      <h2>Thank you for your message. We’ll get back to you as fast as possible.</h2>
      </div>
      </section>

    </Layout>
  );
};

export default AcceptedPage;
