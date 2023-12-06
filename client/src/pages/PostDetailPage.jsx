import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePostByTitleQuery } from "../features/post/postapi";
import PostDetail from "../components/Post/PostDetail";
import Layout from "./Layout";
import Loader from "../components/Loader/Loader";

const PostDetailPage = () => {
  const { category, title } = useParams();
  console.log("pa", category, title);

  const titlename = title.trim().toLowerCase().split("-").join(" ");

  const { data, isLoading, error } = useGetSinglePostByTitleQuery({
    category,
    titlename,
  });
  return (
    <>
      <Layout />
      {isLoading && <Loader />}
      {data && (
        <main className="main-container">
          <PostDetail post={data.post} />
        </main>
      )}
    </>
  );
};

export default PostDetailPage;
