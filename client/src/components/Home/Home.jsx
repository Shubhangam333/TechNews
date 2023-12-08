import Main from "./Main";
import { useGetAllPostQuery } from "../../features/post/postapi";
import RecentNews from "./Recent/RecentNews";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";

const Home = () => {
  const [topPosts, setTopPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [total, setTotal] = useState(Number);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();
  const { data, isLoading } = useGetAllPostQuery({ page: currentPage });

  useEffect(() => {
    if (params && params.page) {
      setCurrentPage(params.page);
    }
  }, [params.page, params]);

  useEffect(() => {
    if (data) {
      const posts = data.posts.slice(0, 12);
      const count = data.postCount;

      if (count > 12) {
        const recentPosts = data.posts.slice(12);
        setRecentPosts([...recentPosts]);
      }
      setTopPosts([...posts]);

      setTotal(data.postCount);
    }
  }, [data]);

  useEffect(() => {
    const totalPages = Math.ceil(total / 13);
    const pageArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
    setPages(pageArray);
  }, [total]);

  return (
    <>
      {topPosts && <Main topPosts={topPosts} isLoading={isLoading} />}
      {recentPosts && <RecentNews recentPosts={recentPosts} />}
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
