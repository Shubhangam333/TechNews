import Wrapper from "../../assets/wrappers/Main";

import Loader from "../Loader/Loader";
import LargePost from "./Posts/LargePost";
import MediumPost from "./Posts/MediumPost";
import SmallPost from "./Posts/SmallPost";

const Main = ({ data, isLoading }) => {
  const getFirstParagraph = (content) => {
    const paragraphs = content.split("</p>");
    if (paragraphs.length > 1) {
      return paragraphs[0] + "</p>"; // Include the closing </p> tag
    } else {
      return content; // If there's only one paragraph, return the original content
    }
  };
  return (
    <Wrapper>
      {isLoading && <Loader />}
      <div className="container">
        {data &&
          data.posts?.map((post, index) => (
            <>
              {index == 0 && <LargePost post={post} />}
              {index > 0 && index <= 2 && <MediumPost post={post} />}
              {index > 2 && <SmallPost post={post} />}
            </>
          ))}
      </div>
    </Wrapper>
  );
};

export default Main;
