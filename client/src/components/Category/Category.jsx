import { useParams } from "react-router-dom";
import { useGetAllPostByCategoryQuery } from "../../features/post/postapi";
import Main from "../Home/Main";
import { useEffect, useState } from "react";
import RecentNews from "../Home/Recent/RecentNews";

const Category = () => {
  const { category } = useParams();
  const { data, isLoading } = useGetAllPostByCategoryQuery({ category });
  const [topPosts, setTopPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    if (data) {
      const posts = data.posts.slice(0, 12);
      const recentPosts = data.posts.slice(12);
      setTopPosts([...posts]);
      setRecentPosts([...recentPosts]);
    }
  }, [data]);

  return (
    <>
      {data && <Main topPosts={topPosts} isLoading={isLoading} />}
      {data && <RecentNews recentPosts={recentPosts} />}
    </>
  );
};

export default Category;
