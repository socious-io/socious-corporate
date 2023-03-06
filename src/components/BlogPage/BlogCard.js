import React from 'react';
import { Link } from 'gatsby';
import { getSrc } from "gatsby-plugin-image";


const BlogCard = ({ edge, alternate }) => {

  const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

  const { node: {
    title,
    slug,
    featuredImage,
    excerpt,
    date
  } } = edge
  const link = edge.node.slug.substring(0, slug.indexOf("%"))

  const imageData = featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData;

  return (
    <div className={alternate ? "alternate blog" : "blog"}>

      {imageData ? (<img className='flex-1 object-cover' src={getSrc(imageData)} alt={featuredImage?.node.altText || title} />) : (<></>)}

      <div className='flex-1 blog-content-words'>
        <p className='blog--date'>
          <small>{date}</small>
        </p>

        {alternate ? (
          <h3 className="blog-title">
            {title}
          </h3>
        ) : (
          <h1 className="blog-title">
            {title}
          </h1>
        )}
        {excerpt &&

          <div className="blog-para" dangerouslySetInnerHTML={{ __html: excerpt }} />


        }
        <Link to={`/blog/${slug}/`}>
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
