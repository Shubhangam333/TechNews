import Wrapper from "../../assets/wrappers/PostDetail";
import { format } from "date-fns";
import LinkComponent from "../Links/LinkComponent";
import Loader from "../Loader/Loader";

const PostDetail = ({ post, isLoading }) => {
  const formattedCreatedAt = format(
    new Date(post.createdAt),
    "MMMM d, yyyy h:mmaaa"
  );

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <LinkComponent tags={post.tags[0].name} catname={post.category.name} />
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="publisher-details">
        <img src={post.publisher.avatar.url} alt="" />
        <div className="publisher-info">
          <h3>{post.publisher.name}</h3>
          <p>{formattedCreatedAt}</p>
        </div>
      </div>
      <div className="post-img-container">
        <img src={post.images[0].url} alt="" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="main-content"
      />
    </Wrapper>
  );
};

export default PostDetail;
