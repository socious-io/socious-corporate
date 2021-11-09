import React from "react"
import { Link } from "gatsby"

const PostItem = (props) => {
  const { title, date, slug, imageSrc } = props
  const url = "/" + slug

  return (
    <Link to={url}>
      <div className="news-headline">        
        <img src={imageSrc} style = {{ maxWidth: "100%" }} alt="article hero banner" />
        <div className="headline-content">
          <h3>{title}</h3>
          <small>{date}</small>
        </div>
      </div>
    </Link>
  )
}

export default PostItem
