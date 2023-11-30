import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../pages/Layout";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <Outlet />{" "}
        </Layout>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default PrivateRoute;
