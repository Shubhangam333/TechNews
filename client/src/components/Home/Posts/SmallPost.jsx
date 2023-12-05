import TagComponent from "./TagComponent";

const SmallPost = ({ post }) => {
  return (
    <div className="post-small ">
      <h2>{post.title}</h2>
      <TagComponent publisher={post.publisher} category={post.category} />
    </div>
  );
};

export default SmallPost;
