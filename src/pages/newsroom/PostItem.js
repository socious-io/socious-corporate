import React from "react"
import { Link } from "gatsby"

const PostItem = (props) => {
  const { title, date, author } = props

  return (
      <div style={{ margin: 10 }}>        
          <Link to={`#`}>
            <h1 style = {{ color: "black" }}>{title}</h1>
            <div style = {{color: "grey", margin: '-30px 0px 0px 0px'}}>{date}</div>
            <p style = {{ color: "black", margin: '15px 0px 30px 0px' }}>{author}</p>
          </Link>
      </div>
  )
}

export default PostItem
