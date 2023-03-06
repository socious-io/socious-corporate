import React from 'react';
import { Link } from 'gatsby';
import { getSrc } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



const HumanBlogCard = ({ edge, alternate }) => {

  // const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

  const { node: {
    title,
    slug,
    featuredImage,
    // excerpt,
    date,
    hosBlogData
  } } = edge
  // const link = edge.node.slug.substring(0, slug.indexOf("%"))

  // const authorFeaturedImage = hosBlogData?.author?.featuredImage;

  const imageData = featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData;
  // const authorImageData = getImage(authorFeaturedImage?.node?.localFile?.childImageSharp?.gatsbyImageData);

  return (
    <div className="hos-blog-card">

      {/* {imageData ? (<img className='hos-blog-image' src={getSrc(imageData)} alt={featuredImage?.node.altText || title} />) : (<></>)} */}

      <Link to={`/humans-of-socious/${slug}/`}><img className='hos-blog-image' src={getSrc(imageData)} alt={featuredImage?.node.altText || title} /></Link>
      {/* <GatsbyImage image={authorImageData} alt={featuredImage?.node.altText || title} className='hos-blog-image' /> */}

      <div className='hos-blog-content-words'>
        <p className='hos-blog-category'>
          {hosBlogData?.category || <></>}
        </p>
        <h1 className="hos-blog-title">
          <Link to={`/humans-of-socious/${slug}/`}>{title}</Link>
        </h1>
        <p className="hos-blog-card-summary">
          {hosBlogData?.summary || <></>}
        </p>

        {/* {authorImageData ?
          <div className='hos-blog-author'>
            <div className='hos-blog-author-image'>
              <GatsbyImage image={authorImageData} alt={authorFeaturedImage?.node.altText || ""} />
            </div>
            <div className='hos-blog-author-text'>
              <p className='hos-blog-author-name'>{hosBlogData?.author?.title}</p>
              <p className='hos-blog-date'><small>{date}</small></p>
            </div>
          </div>
          : <></>} */}

      </div>

    </div>
    
  );
};

export default HumanBlogCard;
