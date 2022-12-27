import { graphql } from 'gatsby'
import React from 'react'
import HumanBlogCard from '../components/HumansOfSociousPage/HumanBlogCard'
import { GatsbyImage, getImage } from "gatsby-plugin-image";


import Layout from '../components/Layout'
import Seo from '../components/seo'

const HumansOfSociousBlog = (props) => {
  
	const jaPage = false

  // const seoDescription = jaPage ?
  //                        'ソーシャスは社会変革のためのコミュニティアプリです。' :
  //                        'Learn more about Socious and what we do, who we are, and what we stand for'

  const seoTitle = jaPage ?
                   'ブログ' :
                   'Blog'

	const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

  const { data } = props

	const { title, content, featuredImage, date }  = data.wpHosBlog

	const { edges } = data.allWpHosBlog

  const newContent = content? content.replaceAll("/wp-content/uploads/", "https://socious-wp.azurewebsites.net/wp-content/uploads/"): null;

  const pluginImage = getImage(featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)

	return (
		<Layout {...props}>
			<Seo
        title={seoTitle}
        description={title}
      />
			
			<div className='hos-blog-template-banner'>
        <div className='hos-template-banner-left'>
          <h1 className='hos-blog-show-title'>{title}</h1>
          <div className='hos-blog-summary'>
						{ date }
					</div>
        </div>
				<div className='hos-template-banner-right'>
        <GatsbyImage image={pluginImage} alt="photo" className='hos-template-image' />
          {/* <img className='main-blog-image' alt={ featuredImage?.node.altText || title} src={ WORDPRESS_URL + featuredImage?.node.sourceUrl} /> */}
				</div>
			</div>

			{/* Main Body */}

      <div className='hos-template-blog-content'>
        {newContent?<div className='hos-template-blog-content__html' dangerouslySetInnerHTML={{ __html: newContent }}></div>:<></>}
        <br></br>
        <div className='hos-template-support-cause'>
          <p>If you would like to support {title.split(" ")[0]}’s cause, please….</p>
        </div>
        <hr></hr>
        <div className='hos-template-blog-footer'>
          <div className='hos-template-blog-footer-left'>
            <h3>Share this post</h3>
          </div>
          <div className='hos-template-blog-footer-right'>
            <button>Copy link</button>
            <button>Twitter</button>
            <button>Facebook</button>
            <button>Linkedin</button>
          </div>
        </div>
      </div>

			{/* More Blogs */}
			<div className="hos-more-articles-box">
				<div className='hos-more-articles-box-header'>
          <div className="hos-more-articles-header-left">
            <h2 className="more-articles-header">Latest Stories</h2>
            <p>Subheading</p>
          </div>
          <div className="hos-more-articles-header-right">
            <button>View All</button>
          </div>
        </div>
          <div className='hos-more-articles'>
          {
						edges.map((edge) => {
							return (
								<div className='hos-blog-card' key={edge.node.id}>
									<HumanBlogCard edge={edge} alternate />
								</div>
							)
						})
					}
          </div>
    	</div>
		</Layout>
	)
}

export default HumansOfSociousBlog

export const query = graphql`
	query ($slug: String) {
		wpHosBlog(slug: {eq: $slug}) {
			title
			slug
			content
      date(formatString: "MMM DD, YYYY")
			featuredImage {
				node {
					sourceUrl
					altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }
				}
			}
		}
    allWpHosBlog (
      sort: {fields: date, order: ASC}
      filter: {slug: {ne: $slug}}
			limit: 3
    ) {
      edges {
        node {
          id
          slug
          hosBlogData {
            author {
              ... on WpHosBlogAuthors {
                title
                featuredImage {
                  node {
                    sourceUrl
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          quality: 100
                          placeholder: BLURRED
                          blurredOptions: {width: 100}
                        )
                      }
                    }
                  }
                }
              }
            }
            category
            date
            summary
          }
          title
          featuredImage {
            node {
              sourceUrl
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    blurredOptions: {width: 100}
                  )
                }
              }
            }
          }
        }
      }
    }
	}
`
