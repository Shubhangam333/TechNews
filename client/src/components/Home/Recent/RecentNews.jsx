import Wrapper from "../../../assets/wrappers/RecentNews";
import RecentArticle from "./RecentArticle";

const RecentNews = ({ recentPosts }) => {
  return (
    <>
      <Wrapper>
        <div className="main-articles">
          {recentPosts.map((post) => (
            <>
              <RecentArticle post={post} />
            </>
          ))}
        </div>
        <aside className="suggestion-container"></aside>
      </Wrapper>
    </>
  );
};

export default RecentNews;
