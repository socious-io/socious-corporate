import React, {useState, useEffect} from 'react'
import PostItem from "./PostItem"
import { useStaticQuery, graphql } from "gatsby"
import { trackButtonClick } from '../segmentUtils'

const EnglishNews = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {fields: frontmatter___Date___start, order: DESC}
          skip: 0
          filter: {frontmatter: {Language: {eq: "en"}, Publish: {eq: true}}}
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                Author {
                  name
                }
                Date {
                  start(formatString: "MM-DD-YYYY")
                }
                Hero_Image {
                  external {
                    url
                  }
                }
                Publish
              }
            }
          }
        }
      }
    `
  )

  const { edges } = data.allMarkdownRemark

  const [displayList, setDisplayList] = useState([...edges.slice(0, 5)])

  const [hasMore, setHasMore ] = useState(edges.length > 5)

  const [loadMore, setLoadMore] = useState(false)

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

//   const posts = data.allMarkdownRemark.edges.map(post => {
//     const { id,
//             frontmatter: { title, slug, Date:date, Hero_Image, Publish }
//     } = post.node
//   const dates = new Date(date.start).toDateString().split('').slice(1).join('')
// const newDates = [dates.slice(0, 9), ",", dates.slice(9)].join('');

//     const completeArticle = Publish ?
//       <PostItem
//         key={id}
//         slug={slug}
//         title={title}
//         date={newDates}
//         imageSrc={Hero_Image[0].external.url}
//       /> :
//       null

//       return completeArticle
//   });

  return (
    <div className="news-container">
         { edges.length > 0 && 
          <>
            {
              displayList.map((edge) => {                
                const dateSplit = edge.node.frontmatter.Date.start.split('-')
                const time = new Date(dateSplit[2],dateSplit[0],dateSplit[1]).toDateString().split(' ').slice(1).join(' ')
                const newTime = [time.slice(0, 6), ", ", time.slice(6)].join('');
                return (
                  <div >
                    <PostItem
                    key={edge.node.id}
                    slug={edge.node.frontmatter.slug}
                    title={edge.node.frontmatter.title}
                    date={newTime}
                    imageSrc={edge.node.frontmatter.Hero_Image[0].external.url}       
                  />
                  </div>
                )
              })
            }
          </>
        }
      { hasMore ? <button 
        onClick={(event) => {handleLoadMore(); trackButtonClick(event)}} 
        className='news-container__more'>
          Load more news</button> : <></> }
    </div>
  )
}

export default EnglishNews
