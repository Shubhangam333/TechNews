import React from "react";
import { Link } from "react-router-dom";

const SearchResultPost = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");
  return (
    <Link to={`/${category}/${title}`} className="search-res-post">
      <img src={post.images[0].url} alt="" />
      <div className="info">
        <p className="title">{post.title}</p>
        <p className="publisher">By: {post.publisher.name}</p>
      </div>
    </Link>
  );
};

export default SearchResultPost;
