import React from 'react';
import { Link } from 'gatsby'

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
  console.log({ link });

  return (
    <div className={alternate ? "alternate blog" : "blog"}>
      <img src={WORDPRESS_URL + featuredImage?.node.sourceUrl} alt={featuredImage?.node.altText || title} />
      <div className='blog-content-words'>
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
        <Link to={`/blog/${slug}`}>
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
