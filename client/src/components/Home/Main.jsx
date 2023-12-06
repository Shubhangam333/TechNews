import Wrapper from "../../assets/wrappers/Main";

import Loader from "../Loader/Loader";
import LargePost from "./Posts/LargePost";
import MediumPost from "./Posts/MediumPost";
import PostRight from "./Posts/PostRight";
import SmallPost from "./Posts/SmallPost";

const Main = ({ data, isLoading }) => {
  return (
    <Wrapper>
      <div className="container">
        {isLoading && <Loader />}
        {data &&
          data?.posts?.map((post, index) => (
            <>
              {index == 0 && <LargePost post={post} />}
              {index > 0 && index <= 2 && <MediumPost post={post} />}
              {index > 2 && index < 9 && <SmallPost post={post} />}
              {index > 9 && <PostRight post={post} />}
            </>
          ))}
      </div>
    </Wrapper>
  );
};

export default Main;
