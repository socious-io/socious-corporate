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
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
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

  const pluginImage = getImage(notFoundBackgroundIma)
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
        <h1 style={headingStyles}>404</h1>
        <p style={paragraphStyles}>
          Something went wrong. Let’s take you back home.
          <br />
          
          <br />
          <Link to="/">Home</Link>.
        </p>
      </main>
    </IntlProvider>
    </BgImage>
    </Layout>
  );
};

export default NotFoundPage;
