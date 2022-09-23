import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';

// styles found in footer

// markup
const NotFoundPage = (props) => {

  const {notFoundBackgroundImage} = useStaticQuery(
    graphql`
      query {
        notFoundBackgroundImage: file(relativePath: {eq: "404-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 100
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `,
  );

  const pluginImage = getImage(notFoundBackgroundImage);
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  return (
    <Layout {...props} header="transparent">
      <BgImage
        image={backgroundFluidImageStack}
        className="section-intro"
        alt="404 banner"
      >
        <main className="pageStyles">
          <p className="headingStyles">404</p>
          <p className="paragraphStyles">
            Something went wrong. Let’s take you<br></br> back home.
            <br />
            <br />
            <br />
            <Link to="/" className="buttonStyles">
              Return Back Home
            </Link>
          </p>
        </main>
      </BgImage>
    </Layout>
  );
};

export default NotFoundPage;
