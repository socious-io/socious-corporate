import React from "react"
import { Link } from "gatsby"

const PostItem = (props) => {
  const { title, date, author, slug, imageSrc } = props
  const url = "/" + slug

  console.log(imageSrc)

  return (
    <div style={{ margin: 10 }}>        
        <Link to={url}>
          <img src={imageSrc} style = {{ maxWidth: "50rem" }} alt="article hero banner" />
          <h1 style={{ color: "black" }}>{title}</h1>
          <div style={{color: "grey", margin: '-30px 0px 0px 0px'}}>{date}</div>
          <p style={{ color: "black", margin: '15px 0px 30px 0px' }}>{author}</p>
        </Link>
    </div>
  )
}

export default PostItem
