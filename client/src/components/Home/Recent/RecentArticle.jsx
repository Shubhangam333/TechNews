import React from "react";
import TagComponent from "../Posts/TagComponent";
import { Link } from "react-router-dom";

const RecentArticle = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");

  return (
    <article className="post-article">
      <div className="article-image-container">
        <img src={post.images[0].url} alt="" />
      </div>
      <div className="article-content">
        <Link to={`/${category}/${title}`} className="post-title-link">
          {post.title}
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.slice(0, 80),
          }}
        />
        <p></p>
        <TagComponent publisher={post.publisher} category={post.category} />
      </div>
    </article>
  );
};

export default RecentArticle;
