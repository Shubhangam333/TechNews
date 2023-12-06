import { Link } from "react-router-dom";
import TagComponent from "./TagComponent";

const MediumPost = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");
  return (
    <div className="post  post-med post-first-col">
      <div className="med-post-image-container">
        <img src={post.images[0].url} alt="" />
      </div>

      <div className="med-post-content-detail">
        <Link to={`/${category}/${title}`} className="title-link">
          {post.title}
        </Link>
        <TagComponent publisher={post.publisher} category={post.category} />
      </div>
    </div>
  );
};

export default MediumPost;
