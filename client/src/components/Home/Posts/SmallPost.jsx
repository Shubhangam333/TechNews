import { Link } from "react-router-dom";
import TagComponent from "./TagComponent";

const SmallPost = ({ post }) => {
  const title = post.title.trim().toLowerCase().split(" ").join("-");
  const category = post.category.name.trim().toLowerCase().split(" ").join("-");
  return (
    <div className="post post-small ">
      <Link className="title-link" to={`/${category}/${title}`}>
        {post.title}
      </Link>
      <TagComponent publisher={post.publisher} category={post.category} />
    </div>
  );
};

export default SmallPost;
