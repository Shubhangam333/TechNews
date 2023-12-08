import Wrapper from "../../assets/wrappers/Main";

import Loader from "../Loader/Loader";
import LargePost from "./Posts/LargePost";
import MediumPost from "./Posts/MediumPost";
import PostRight from "./Posts/PostRight";
import SmallPost from "./Posts/SmallPost";

const Main = ({ topPosts, isLoading }) => {
  return (
    <Wrapper>
      <div className="container">
        {isLoading && <Loader />}
        {topPosts &&
          topPosts.map((post, index) => (
            <>
              {index == 0 && <LargePost post={post} />}
              {index > 0 && index <= 2 && <MediumPost post={post} />}
              {index > 2 && index < 9 && <SmallPost post={post} />}
              {index > 9 && index < 12 && <PostRight post={post} />}
            </>
          ))}
      </div>
    </Wrapper>
  );
};

export default Main;
