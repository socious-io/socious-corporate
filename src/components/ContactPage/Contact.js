import React from 'react'
import SimpleLocalize from "../shared/SimpleLocalize";
import { Button, TextField, InputLabel } from '@mui/material';
import { FormattedMessage } from "react-intl";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { navigate } from "gatsby";


const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Email should be of the correct format')
    .required('Email is required'),

  message: yup
    .string('Enter your message')
    .required('Message is required'),
});

const ContactForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      navigate("/contact-accepted")

    },
  });

 

  return (
    <SimpleLocalize {...props}>
      <section className='form-holder'>
        <h2>We’d love to hear from you!</h2>
      <div className='form'>
     <form onSubmit={formik.handleSubmit}>

      <div className='form-inputs'>
      
      <div className='name'>
        <InputLabel className='form-message-title'>Your Name</InputLabel>
        <TextField
          fullWidth
          className='form-inputs-name'
          id="name"
          name="name"
          label="Your name"
          placeholder='Your name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </div>
   
      <div className='email'>
        <InputLabel className='form-message-title'>Your Email</InputLabel>
        <TextField
          fullWidth
          className='form-inputs-email'
          id="email"
          name="email"
          label=" Your Email"
          type="email"
          placeholder='Your Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
   
        </div>
        <InputLabel className='form-message-title'>Your Message</InputLabel>
          <TextField
          fullWidth
          className='form-message'
          multiline
          minRows={6}
          id="message"
          name="message"
          label="Your Message"
          placeholder='Your Message'
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button color="primary" variant="contained" fullWidth={false} type="submit" className='form-submit'>
          Send your message
        </Button>
      </form>
      </div>
      </section>
     
    </SimpleLocalize>
  )
}

export default ContactForm
