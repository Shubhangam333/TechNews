import { Link } from "react-router-dom";
import TagComponent from "./TagComponent";
import Wrapper from "../../../assets/wrappers/Post";

const Post = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");

  const getFirstParagraph = (content) => {
    const paragraphs = content.split(".");
    if (paragraphs.length > 1) {
      return "<p>" + paragraphs[0] + "." + "</p>"; // Include the closing </p> tag
    } else {
      return content; // If there's only one paragraph, return the original content
    }
  };
  return (
    <Wrapper>
      <div className="post">
        <div className="post-img-container">
          <img src={post.images[0].url} alt="" />
        </div>
        <Link to={`/${category}/${title}`} className="post-title-link">
          {post.title}
        </Link>
        <TagComponent publisher={post.publisher} category={post.category} />
      </div>
    </Wrapper>
  );
};

export default Post;
