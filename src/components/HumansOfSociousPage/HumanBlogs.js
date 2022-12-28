import React, { useState, useEffect }from "react"

import { graphql, useStaticQuery  } from "gatsby"

import HumanBlogCard from "./HumanBlogCard"

const HumanBlogs = () => {

  const query = useStaticQuery(graphql`
    {
      allWpHosBlog (sort: {order: ASC, fields: date}) {
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
  `)
  const { edges } = query.allWpHosBlog

  const cardsPerPage = 3;

  const numberOfPages = Math.ceil(edges.length/cardsPerPage);

  const [displayList, setDisplayList] = useState([...edges.slice(0, cardsPerPage)])
  
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (data) => {
    if(data == 'prev'){
      setCurrentPage(currentPage > 1 ? currentPage-1 : 1);
    }
    else if(data == 'next'){
      setCurrentPage(currentPage < numberOfPages ? currentPage+1 : numberOfPages)
    }
    else{
      setCurrentPage(data);
    }
  }

  useEffect(() => {
    setDisplayList([...edges.slice((currentPage-1)*cardsPerPage, currentPage*cardsPerPage)]);
  }, [currentPage])

  return (
    <div>
      <div className="hos-container__blog__temp">
        {/* check for length */}
        { edges.length > 0 && 
          <>
            {
              displayList.map((edge) => {
                return (
                  <HumanBlogCard edge={edge} key={edge.node.id} alternate/>
                )
              })
            }
          </>
        }
      </div>

      <div className="hos-pagination">
        <button onClick={() => {changePage('prev')}} className="hos-page-button-arrows">&#8592; &nbsp; Previous</button>
        <div className="hos-pages-list">
          {[...Array(numberOfPages).keys()].map(x => {
            return (<button onClick={() => {changePage(x+1)}} className="hos-page-button">{x+1}</button>)
            })}
        </div>
        <button onClick={() => {changePage('next')}} className="hos-page-button-arrows">Next &nbsp; &#8594;</button>
      </div>
    </div>
  )
}

export default HumanBlogs
