import { useParams } from "react-router-dom";
import { useGetAllPostByCategoryQuery } from "../../features/post/postapi";
import Main from "../Home/Main";
import Test from "../Home/Test";

const Category = () => {
  const { category } = useParams();
  const { data, isLoading, error } = useGetAllPostByCategoryQuery({ category });
  console.log("e", error);

  return (
    <>
      {data && <Main data={data} isLoading={isLoading} />}
      <Test />
    </>
  );
};

export default Category;
