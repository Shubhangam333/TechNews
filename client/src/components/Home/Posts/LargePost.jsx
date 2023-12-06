import React from "react";
import TagComponent from "./TagComponent";
import { Link } from "react-router-dom";

const LargePost = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");

  const getFirstParagraph = (content) => {
    const paragraphs = content.split("</p>");
    if (paragraphs.length > 1) {
      return paragraphs[0] + "</p>"; // Include the closing </p> tag
    } else {
      return content; // If there's only one paragraph, return the original content
    }
  };
  return (
    <div className="post post-lg post-first-col">
      <div className="post-img-container">
        <img src={post.images[0].url} alt="" />
      </div>
      <Link to={`/${category}/${title}`} className="large-post-title-link">
        {post.title}
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: getFirstParagraph(post.content),
        }}
      />
      <TagComponent publisher={post.publisher} category={post.category} />
    </div>
  );
};

export default LargePost;
