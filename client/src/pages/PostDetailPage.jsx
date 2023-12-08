import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePostByTitleMutation } from "../features/post/postapi";
import PostDetail from "../components/Post/PostDetail";
import Layout from "./Layout";
import Loader from "../components/Loader/Loader";

const PostDetailPage = () => {
  const { title } = useParams();
  const [postdata, setPostData] = useState(null);

  const titlename = title.trim().toLowerCase().split("-").join(" ");

  const [getPost, { isLoading }] = useGetSinglePostByTitleMutation();
  const getPostByTitle = useCallback(async () => {
    try {
      const res = await getPost({ titlename }).unwrap();
      if (res) {
        setPostData(res.post);
      }
    } catch (error) {
      console.log(error);
    }
  }, [getPost, titlename]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPostByTitle();
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, [getPostByTitle]);
  return (
    <>
      <Layout />
      {postdata && (
        <main className="main-container">
          <PostDetail post={postdata} isLoading={isLoading} />
        </main>
      )}
    </>
  );
};

export default PostDetailPage;
