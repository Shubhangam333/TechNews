import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../pages/Layout";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      {isAuthenticated ? (
        <>
          <Layout />
          <main className="main-container">
            <Outlet />
          </main>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default PrivateRoute;
