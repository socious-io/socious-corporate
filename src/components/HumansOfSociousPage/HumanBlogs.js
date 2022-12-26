import React, { useState, useEffect }from "react"

import { graphql, useStaticQuery  } from "gatsby"

import HumanBlogCard from "./HumanBlogCard"

const HumanBlogs = () => {

  const query = useStaticQuery(graphql`
    {
      allWpHosBlog (sort: {order: DESC, fields: date}) {
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
  `)
  const { edges } = query.allWpHosBlog

  const [displayList, setDisplayList] = useState([...edges.slice(0, 3)])

  const [hasMore, setHasMore ] = useState(edges.length > 5)

  const [loadMore, setLoadMore] = useState(false)

  // console.log(edges);

  const handleLoadMore = () => {
    setLoadMore(true)
  }
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = displayList.length
      const isMore = currentLength < edges.length
      const nextResults = isMore
        ? edges.slice(currentLength, currentLength + 5)
        : []
      setDisplayList([...displayList, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  useEffect(() => {
    setHasMore(()=> displayList.length < edges.length)
  }, [displayList])

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
      {/* { hasMore ? <button onClick={handleLoadMore} className="load-more">Load more blogs</button> : <></> } */}
      <div className="hos-pagination">
        <button>&#8592; Previous</button>
        <div className="hos-pages-list">1 2 3 4</div>
        <button>Next &#8594;</button>
      </div>
    </div>
  )
}

export default HumanBlogs
