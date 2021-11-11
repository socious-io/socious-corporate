import React from "react"
import { Link } from "gatsby"

const PostItem = (props) => {
  const { title, date, slug, imageSrc } = props
  const url = "/" + slug

  return (
    <Link to={url}>
      <div className="news-item">
        <div class="news-item__image">
          <img src={imageSrc} style = {{ maxWidth: "100%" }} alt="article hero banner" />
        </div>
        <div className="news-item__content">
          <div class="news-content-title">
            <h3>{title}</h3>
          </div>
          <div class="news-content-date">
            <small>{date}</small>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostItem
