import React from 'react';

const PostItem = (props) => {
  const {title, date, slug, imageSrc} = props;
  const url = '/' + slug;

  return (
    <div className="news-item">
      {/* <Link to={url} style={{ width: "max-content" }} > */}
      <div className="news-item__image">
        <img
          src={imageSrc}
          style={{maxWidth: '100%'}}
          alt="article hero banner"
        />
      </div>
      <div className="news-item__content">
        <div class="news-content-date">
          <small>{date}</small>
        </div>
        <br />
        <div class="news-content-title">
          <h3>{title}</h3>
        </div>
        <div class="news-content-link">
          <br></br>
          <a href={url}>Read More &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
