import React from "react"
import { Link } from "gatsby"

const PostItem = (props) => {
  const { title, date, author, slug, imageSrc } = props
  const url = "/" + slug

  console.log(imageSrc)

  return (
    <div className="article-item">        
        <Link to={url}>
          <img src={imageSrc} style = {{ maxWidth: "100%" }} alt="article hero banner" />
          <h1 style={{ color: "black" }}>{title}</h1>
          <small style={{color: "grey"}}>{date}</small>
          <p style={{ color: "black"}}>{author}</p>
        </Link>
    </div>
  )
}

export default PostItem
