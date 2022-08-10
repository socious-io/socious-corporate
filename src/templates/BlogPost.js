import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/seo';

const BlogPost = (props) => {
  const {data} = props;
  const {frontmatter, html} = data.markdownRemark;
  const time = new Date(frontmatter.Date.start).toDateString().split(' ').slice(1).join(' ')


  return (
    <Layout {...props} header="default" >
      <Seo
        title={frontmatter.title}
        description={frontmatter.Meta_Description}
        image={frontmatter.Hero_Image[0].external.url}
        twitterImage={frontmatter.Hero_Image[0].external.url}
      />
      <div className="main">
        <div className="container__article">
          <div className="article__info">
          <p>{time}</p>
            <h1>{frontmatter.title}</h1>
          </div>
          <img
            src={frontmatter.Hero_Image[0].external.url}
            className="image__article"
            alt={frontmatter.Hero_Image_Alt}
          />
          <div className="article__body">
            <div dangerouslySetInnerHTML={{__html: html}} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query PageContents($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        Author {
          name
        }
        Date {
          start(formatString: "YYYY-MM-DD")
        }
        slug
        title
        Hero_Image {
          external {
            url
          }
        }
        Hero_Image_Alt
        Meta_Description
      }
      html
    }
  }
`;
