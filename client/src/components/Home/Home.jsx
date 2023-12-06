import Main from "./Main";
import { useGetAllPostQuery } from "../../features/post/postapi";
import Test from "./Test";
import { useEffect, useState } from "react";
const Home = () => {
  const { data, isLoading } = useGetAllPostQuery();

  return (
    <>
      {data && <Main data={data} isLoading={isLoading} />}

      <Test />
    </>
  );
};

export default Home;
