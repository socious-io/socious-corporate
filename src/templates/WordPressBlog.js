import { graphql } from 'gatsby'
import React from 'react'
import BlogCard from '../components/BlogPage/BlogCard'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const WordPressBlog = ({ data }) => {
  
	const jaPage = false

  // const seoDescription = jaPage ?
  //                        'ソーシャスは社会変革のためのコミュニティアプリです。' :
  //                        'Learn more about Socious and what we do, who we are, and what we stand for'

  const seoTitle = jaPage ?
                   'ブログ' :
                   'Blog'

	const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

	const { title, content, date, featuredImage }  = data.wpPost

	const { edges } = data.allWpPost


	return (
		<Layout>
			<Seo
        title={seoTitle}
        description={title}
      />
			
			<div className='blog-show-banner'>
				<div className='container__blog__temp'>
					<div className='blog-date'>
						{ date }
					</div>
					<h1 className='blog-show-title'>{title}</h1>
				</div>
			</div>

			{/* Main Body */}
			<div className='container__blog__temp'>
				<img className='main-blog-image' alt={ featuredImage?.node.altText || title} src={ WORDPRESS_URL + featuredImage?.node.sourceUrl} />
				<div className='blog-content' dangerouslySetInnerHTML={{ __html: content }}></div>
			</div>

			{/* More Blogs */}
			<div className="more-articles-box">
				<div className='container__blog__temp'>
					<h2 className="more-articles-header">You might also like</h2>
					{
						edges.map((edge) => {
							return (
								<div className='blog-card' key={edge.node.id}>
									<BlogCard edge={edge} alternate />
								</div>
							)
						})
					}
				</div>
    	</div>
		</Layout>
	)
}

export default WordPressBlog

export const query = graphql`
	query ($slug: String) {
		wpPost(slug: {eq: $slug}) {
			title
			slug
			content
			date(formatString: "MMM DD, YYYY")
			featuredImage {
				node {
					sourceUrl
					altText
				}
			}
		}
		allWpPost(
			sort: {fields: date, order: DESC}
			filter: {slug: {ne: $slug}}
			limit: 3
		) {
			edges {
				node {
					id
					slug
					title
					content
					date(formatString: "MMM DD, YYYY")
					featuredImage {
						node {
							sourceUrl
							altText
						}
					}
				}
			}
		}
	}
`
