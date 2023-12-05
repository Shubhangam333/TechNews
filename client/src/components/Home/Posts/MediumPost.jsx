import React from "react";
import TagComponent from "./TagComponent";

const MediumPost = ({ post }) => {
  return (
    <div className="post-med post-first-col">
      <div className="med-post-image-container">
        <img src={post.images[0].url} alt="" />
      </div>

      <div className="med-post-content-detail">
        <h1>{post.title}</h1>
        <TagComponent publisher={post.publisher} category={post.category} />
      </div>
    </div>
  );
};

export default MediumPost;
