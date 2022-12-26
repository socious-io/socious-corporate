import React from 'react';
import { Link } from 'gatsby';
import { getSrc } from "gatsby-plugin-image";


const HumanBlogCard = ({ edge, alternate }) => {

  // const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

  const { node: {
    title,
    slug,
    featuredImage,
    // excerpt,
    hosBlogData
  } } = edge
  const date = hosBlogData?.date ? hosBlogData?.date : "";
  // const link = edge.node.slug.substring(0, slug.indexOf("%"))

  const imageData = featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData;

  return (
    <div className="hos-blog-card">

      {/* {imageData ? (<img className='hos-blog-image' src={getSrc(imageData)} alt={featuredImage?.node.altText || title} />) : (<></>)} */}

      <img className='hos-blog-image' src={getSrc(imageData)} alt={featuredImage?.node.altText || title} />

      <div className='hos-blog-content-words'>
        <p className='hos-blog-category'>
          Category
        </p>
        <h1 className="hos-blog-title">
        <Link to={`/hos/${slug}`}>{title}</Link>
        </h1>
        <p className="hos-blog-summary">
          Summary
        </p>
        <div className='hos-blog-author'>
          <div className='hos-blog-author-image'>Image</div>
          <div className='hos-blog-author-text'>
            <p className='hos-blog-author-name'>First Name Last Name</p>
            <p className='hos-blog-date'><small>{date}</small></p>
          </div>          
        </div>
        
      </div>

    </div>
  );
};

export default HumanBlogCard;
