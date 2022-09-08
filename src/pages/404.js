import * as React from 'react';
import {IntlProvider} from 'react-intl';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 3,
  textAlign:"center",
  // marginBottom: 64,
  // maxWidth: 320,
  fontSize:"320px",
  color:"#ffffff",
  '@media (max-width: 1100px)':{
    fontSize:"104px",
  }
};

const paragraphStyles = {
  color:"#ffffff",
  textAlign:"center",
  fontSize:"24px",
  fontWeight:600,
  marginTop: "-14%",

  "@media only screen and (max-width: 600px)":{
    fontSize:"14px",

  }

  
};

const buttonStyles = {
  color:"#2F4786",
  textAlign:"center",
  fontSize:"18px",
  margin:5,
  backgroundColor:"#ffffff",
  padding: "12px 32px",
  borderRadius: "50px",
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
const NotFoundPage = (props) => {
  const {
    pageContext: {language, messages},
  } = props;

  const { notFoundBackgroundImage } = useStaticQuery(
    graphql`
      query {
        notFoundBackgroundImage: file(relativePath: {eq: "404-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 100,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(notFoundBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  return (
    <Layout {...props} header="transparent" >
      <BgImage image={backgroundFluidImageStack} className="section-intro">
    <IntlProvider defaultLocale="en" locale={language} messages={messages}>
      <main style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles} className="heading">404</h1>
        <p style={paragraphStyles} className="heading-subtitle">
          Something went wrong. Let’s take you back home.
          <br />
          
          <br />
          <Link to="/" style={buttonStyles} className="heading-button">Home</Link>
        </p>
      </main>
    </IntlProvider>
    </BgImage>
    </Layout>
  );
};

export default NotFoundPage;
