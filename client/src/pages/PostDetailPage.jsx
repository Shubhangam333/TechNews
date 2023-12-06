import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePostByTitleQuery } from "../features/post/postapi";
import PostDetail from "../components/Post/PostDetail";
import Layout from "./Layout";
import Loader from "../components/Loader/Loader";

const PostDetailPage = () => {
  const { title } = useParams();

  const titlename = title.trim().toLowerCase().split("-").join(" ");

  const { data, isLoading } = useGetSinglePostByTitleQuery({
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
