import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Banner from '../../components/HumansOfSociousPage/Banner';

import Cta from "../../components/Homepage/CTA";
import { Button, TextField, InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from "gatsby";
import HumanBlogs from '../../components/HumansOfSociousPage/HumanBlogs'


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Email should be of the correct format')
    .required('Email is required'),
});

const HumansOfSociousPage = (props) => {
    const { pageContext } = props;
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values)
        alert("Subscribed")
      },
    });

    return (
      <Layout {...props} header="">
        <Seo key="humans_of_socious"
          title="Humans of Socious"
          description="Learn about the latest news from Socious: Updates from the company & team, what we do, who we are, and what we stand for."
        />

        <Banner />
        <div className="hos-subscription-form"> 
            <div className="hos-subscription-form-div">  
              <p className='hos-form-message-title'>Stories and Interviews</p>    
              <p className="hos-form-subscribe-to">Subscribe to...</p>   
            </div>
            <form onSubmit={formik.handleSubmit}>
              <span className="hos-form-text-div">
                <span classname="hos-form-text-field">
                  <TextField
                    className='hos-form-message'
                    // multiline
                    // minRows={6}
                    id="message"
                    name="message"
                    placeholder='Enter your email'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                  />
                  <p className="hos-form-we-care">We care about your data in our <Link id="hos-privacy-policy" to={`/privacy-policy/`}>privacy policy</Link></p>
                </span>
                <Button variant="contained" type="submit" className='hos-form-submit'>
                  Get Started
                </Button>
              </span>
            </form>
        </div>

        <HumanBlogs />
        <Cta />
      </Layout>
    );
};

export default HumansOfSociousPage;
