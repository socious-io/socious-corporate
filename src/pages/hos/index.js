import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Banner from '../../components/HumansOfSociousPage/Banner';

import JapaneseNews from '../../components/NewsroomPage/JapaneseNews';
import EnglishNews from '../../components/NewsroomPage/EnglishNews';
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
          <form onSubmit={formik.handleSubmit}>
            <InputLabel className='form-message-title'><h1>Stories and Interviews</h1></InputLabel>
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
            <Button color="primary" variant="contained" type="submit" className='form-submit'>
              Get Started
            </Button>
          </form>
          <p>We care about your data in our <Link id="hos-privacy-policy" to={`/privacy-policy/`}>privacy policy</Link></p>
        </div>
        
        <HumanBlogs />
        <Cta />
      </Layout>
    );
};

export default HumansOfSociousPage;
