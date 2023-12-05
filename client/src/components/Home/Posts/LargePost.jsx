import React from "react";
import TagComponent from "./TagComponent";

const LargePost = ({ post }) => {
  return (
    <div className="post-lg post-first-col">
      <div className="post-img-container">
        <img src={post.images[0].url} alt="" />
      </div>
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.slice(0, 400),
        }}
      />
      <TagComponent publisher={post.publisher} category={post.category} />
    </div>
  );
};

export default LargePost;
