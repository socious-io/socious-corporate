import { graphql } from 'gatsby'
import React from 'react'
import HumanBlogCard from '../components/HumansOfSociousPage/HumanBlogCard'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'


import Layout from '../components/Layout'
import Seo from '../components/seo'

const HumansOfSociousBlog = (props) => {

  const seoTitle = "Humans of Socious"
  
  const { data } = props

  const { title, content, featuredImage, date }  = data.wpHosBlog

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    document.getElementById("hos-template-button-copy-link").innerHTML = "Copied"
    setTimeout(() => {
      document.getElementById("hos-template-button-copy-link").innerHTML = "Copy Link"
    }, 5000)
  }
  const shareBlogOnFacebook = () => {
    const url = window.location.href;
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url) + '&t=' + encodeURIComponent(title), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600');
    return false;
  }
  const shareBlogOnLinkedin = () => {
    const url = window.location.href;
    window.open('https://www.linkedin.com/sharing/share-offsite/?mini=true&url=' + encodeURIComponent(url) + '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600');
    return false;
  }
  const shareBlogOnTwitter = () => {
    const url = window.location.href;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600');
    return false;
  }

  
  const {introduction, subtitle, calltoaction} = data.wpHosBlog.hosBlogData;

	const { edges } = data.allWpHosBlog

  const newContent = content? content.replaceAll("/wp-content/uploads/", "https://socious-wp.azurewebsites.net/wp-content/uploads/"): null;

  const pluginImage = getImage(featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)

  const currentSiteUrl = data.site.siteMetadata.url;

	return (
		<Layout {...props} pageTitle={title}>
			<Seo
        title={seoTitle}
        description={title}
        image={currentSiteUrl+featuredImage?.node?.localFile?.publicURL}
        twitterImage={currentSiteUrl+featuredImage?.node?.localFile?.publicURL}
      />
			
			<div className='hos-blog-template-banner'>
        <div className='hos-template-banner-left'>
          <h1 className='hos-blog-show-title'>{title}</h1>
          <div className='hos-blog-summary'>
						{ subtitle }
					</div>
        </div>
				<div className='hos-template-banner-right'>
        <GatsbyImage image={pluginImage} alt="photo" className='hos-template-image' />
          {/* <img className='main-blog-image' alt={ featuredImage?.node.altText || title} src={ WORDPRESS_URL + featuredImage?.node.sourceUrl} /> */}
				</div>
			</div>

			{/* Main Body */}

      <div className='hos-template-blog-content'>
        {newContent?<div className='hos-template-blog-content__html' >
          <p className='hos-introduction' dangerouslySetInnerHTML={{ __html: introduction }}></p>
          <div dangerouslySetInnerHTML={{ __html: newContent }}></div>
          </div>:<></>}
        {calltoaction?<div className='hos-template-support-cause'>
          <p><div dangerouslySetInnerHTML={{ __html: calltoaction }}></div></p>
        </div>:<></>}
        <hr className="hos-template-footer-divider"></hr>
        <div className='hos-template-blog-footer'>
          <div className='hos-template-blog-footer-left'>
            <h3 className="hos-template-blog-footer-share-post">Share this post</h3>
          </div>
          <div className='hos-template-blog-footer-right'>
            <button onClick={copyLinkToClipboard} className="hos-template-blog-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16669 12.5003C3.39012 12.5003 3.00183 12.5003 2.69555 12.3735C2.28717 12.2043 1.96271 11.8798 1.79355 11.4715C1.66669 11.1652 1.66669 10.7769 1.66669 10.0003V4.33366C1.66669 3.40024 1.66669 2.93353 1.84834 2.57701C2.00813 2.2634 2.2631 2.00844 2.5767 1.84865C2.93322 1.66699 3.39993 1.66699 4.33335 1.66699H10C10.7766 1.66699 11.1649 1.66699 11.4712 1.79386C11.8795 1.96302 12.204 2.28747 12.3732 2.69585C12.5 3.00214 12.5 3.39042 12.5 4.16699M10.1667 18.3337H15.6667C16.6001 18.3337 17.0668 18.3337 17.4233 18.152C17.7369 17.9922 17.9919 17.7372 18.1517 17.4236C18.3334 17.0671 18.3334 16.6004 18.3334 15.667V10.167C18.3334 9.23357 18.3334 8.76686 18.1517 8.41034C17.9919 8.09674 17.7369 7.84177 17.4233 7.68198C17.0668 7.50033 16.6001 7.50033 15.6667 7.50033H10.1667C9.23327 7.50033 8.76656 7.50033 8.41004 7.68198C8.09643 7.84177 7.84147 8.09674 7.68168 8.41034C7.50002 8.76686 7.50002 9.23357 7.50002 10.167V15.667C7.50002 16.6004 7.50002 17.0671 7.68168 17.4236C7.84147 17.7372 8.09643 17.9922 8.41004 18.152C8.76656 18.3337 9.23327 18.3337 10.1667 18.3337Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span id="hos-template-button-copy-link">Copy link</span></button>
            <button onClick={shareBlogOnTwitter} className="hos-template-blog-button">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.2896 17.126C13.8368 17.126 17.9648 10.8732 17.9648 5.45084C17.9648 5.27324 17.9648 5.09644 17.9528 4.92044C18.7559 4.33957 19.4491 3.62034 20 2.79644C19.2512 3.12844 18.4567 3.34607 17.6432 3.44204C18.4998 2.92928 19.141 2.12269 19.4472 1.17244C18.6417 1.65045 17.7605 1.9873 16.8416 2.16844C16.2229 1.51059 15.4047 1.07497 14.5135 0.929011C13.6223 0.783047 12.7078 0.934869 11.9116 1.36098C11.1154 1.7871 10.4819 2.46375 10.109 3.28623C9.73605 4.10871 9.64462 5.03116 9.8488 5.91084C8.21741 5.82901 6.62146 5.40503 5.16455 4.66644C3.70763 3.92786 2.4223 2.89116 1.392 1.62364C0.867274 2.52697 0.70656 3.59633 0.942583 4.61399C1.17861 5.63165 1.79362 6.5211 2.6624 7.10124C2.00936 7.08211 1.37054 6.90594 0.8 6.58764V6.63964C0.800259 7.58702 1.12821 8.50514 1.72823 9.23828C2.32824 9.97142 3.16338 10.4744 4.092 10.662C3.4879 10.8268 2.85406 10.8509 2.2392 10.7324C2.50151 11.5477 3.01202 12.2606 3.69937 12.7716C4.38671 13.2825 5.21652 13.5658 6.0728 13.582C5.22203 14.2508 4.24776 14.7452 3.20573 15.037C2.16369 15.3289 1.07435 15.4124 0 15.2828C1.87653 16.487 4.05994 17.1258 6.2896 17.1228" fill="#98A2B3"/>
</svg>
</button>
            <button onClick={shareBlogOnFacebook} className="hos-template-blog-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_272_37726)">
<path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#98A2B3"/>
<path d="M13.8926 12.8906L14.3359 10H11.5625V8.125C11.5625 7.33418 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C9.47287 20.0405 10.5271 20.0405 11.5625 19.8785V12.8906H13.8926Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_272_37726">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

            </button>
            <button onClick={shareBlogOnLinkedin} className="hos-template-blog-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_272_37729)">
<path d="M18.5236 0H1.47639C1.08483 0 0.709301 0.155548 0.432425 0.432425C0.155548 0.709301 0 1.08483 0 1.47639V18.5236C0 18.9152 0.155548 19.2907 0.432425 19.5676C0.709301 19.8445 1.08483 20 1.47639 20H18.5236C18.9152 20 19.2907 19.8445 19.5676 19.5676C19.8445 19.2907 20 18.9152 20 18.5236V1.47639C20 1.08483 19.8445 0.709301 19.5676 0.432425C19.2907 0.155548 18.9152 0 18.5236 0ZM5.96111 17.0375H2.95417V7.48611H5.96111V17.0375ZM4.45556 6.1625C4.11447 6.16058 3.7816 6.05766 3.49895 5.86674C3.21629 5.67582 2.99653 5.40544 2.8674 5.08974C2.73826 4.77404 2.70554 4.42716 2.77336 4.09288C2.84118 3.7586 3.0065 3.4519 3.24846 3.21148C3.49042 2.97107 3.79818 2.80772 4.13289 2.74205C4.4676 2.67638 4.81426 2.71133 5.12913 2.84249C5.44399 2.97365 5.71295 3.19514 5.90205 3.47901C6.09116 3.76288 6.19194 4.09641 6.19167 4.4375C6.19488 4.66586 6.15209 4.89253 6.06584 5.104C5.97959 5.31547 5.85165 5.50742 5.68964 5.66839C5.52763 5.82936 5.33487 5.95607 5.12285 6.04096C4.91083 6.12585 4.68389 6.16718 4.45556 6.1625ZM17.0444 17.0458H14.0389V11.8278C14.0389 10.2889 13.3847 9.81389 12.5403 9.81389C11.6486 9.81389 10.7736 10.4861 10.7736 11.8667V17.0458H7.76667V7.49306H10.6583V8.81667H10.6972C10.9875 8.22917 12.0042 7.225 13.5556 7.225C15.2333 7.225 17.0458 8.22083 17.0458 11.1375L17.0444 17.0458Z" fill="#98A2B3"/>
</g>
<defs>
<clipPath id="clip0_272_37729">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

            </button>
          </div>
        </div>
      </div>

			{/* More Blogs */}
      {edges.length > 0 ?
      <><hr className="hos-more-articles-box-divider"></hr>
			<div className="hos-more-articles-box">
				<div className='hos-more-articles-box-header'>
          <div className="hos-more-articles-header-left">
            <h2>Latest stories</h2>
            <p className="hos-more-articles-subheading"></p>
          </div>
          <div className="hos-more-articles-header-right">
            <Link to={"/hos"}><button>View All</button></Link>
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
          <div className="hos-more-articles-header-right-mobile">
            <Link to={"/hos"}><button>View All</button></Link>
          </div>
    	</div></>
      : <div style={{padding: "2rem"}}></div>
      }
		</Layout>
	)
}

export default HumansOfSociousBlog


export const query = graphql`
	query ($slug: String) {
    site {
      siteMetadata {
        url
      }
    }
		wpHosBlog(slug: {eq: $slug}) {
			title
			slug
			content
      date(formatString: "MMM DD, YYYY")
      hosBlogData {
        introduction
        subtitle
        calltoaction
      }
			featuredImage {
				node {
					sourceUrl
					altText
          localFile {
            publicURL
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
      sort: {fields: date, order: DESC}
      filter: {slug: {ne: $slug}}
			limit: 3
    ) {
      edges {
        node {
          id
          slug
          date(formatString: "MMM DD, YYYY")
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
