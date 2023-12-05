import Main from "./Main";

import { useGetAllPostQuery } from "../../features/post/postapi";
const Home = () => {
  const { data, isLoading } = useGetAllPostQuery();
  console.log(data);
  return (
    <>
      <Main data={data} isLoading={isLoading} />
    </>
  );
};

export default Home;
