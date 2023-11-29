import { useEffect } from "react";
import Register from "../components/Authentication/Register";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Signup = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <Layout>
      <Register />
    </Layout>
  );
};

export default Signup;
