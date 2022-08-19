import React, { useState, useEffect }from "react"

import { graphql, useStaticQuery  } from "gatsby"

import BlogCard from "./BlogCard"

const Blogs = () => {

  const query = useStaticQuery(graphql`
    {
      allWpPost(sort: {order: DESC, fields: date}, skip: 2) {
        edges {
          node {
            id
            title
            date(formatString: "MMM DD, YYYY")
            slug
            excerpt
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
  `)
  const { edges } = query.allWpPost

  const [displayList, setDisplayList] = useState([...edges.slice(0, 5)])

  const [hasMore, setHasMore ] = useState(edges.length > 5)

  const [loadMore, setLoadMore] = useState(false)

  console.log(edges);

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
    <div className="main blogs-list">
      <div className="container__blog__temp">
        {/* check for length */}
        { edges.length > 0 && 
          <>
            {
              displayList.map((edge) => {
                return (
                  <div className="blog-card">
                    <BlogCard edge={edge} key={edge.node.id} alternate/>
                  </div>
                )
              })
            }
          </>
        }
        <button onClick={handleLoadMore} className="load-more">Load more blogs</button>
      </div>
    </div>
  )
}

export default Blogs
