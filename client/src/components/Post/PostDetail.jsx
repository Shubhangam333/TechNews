import Wrapper from "../../assets/wrappers/PostDetail";
import { format } from "date-fns";
import LinkComponent from "../Links/LinkComponent";

const PostDetail = ({ post }) => {
  console.log(post);

  const formattedCreatedAt = format(
    new Date(post.createdAt),
    "MMMM d, yyyy h:mmaaa"
  );

  return (
    <Wrapper>
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
