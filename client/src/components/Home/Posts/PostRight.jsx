import { Link } from "react-router-dom";
import TagComponent from "./TagComponent";

const PostRight = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");
  return (
    <div className="post post-right-container">
      <img src={post.images[0].url} alt="post avatar" />
      <Link className="title-link" to={`${category}/${title}`}>
        {post.title}
      </Link>
      <TagComponent publisher={post.publisher} category={post.category} />
    </div>
  );
};

export default PostRight;
