import { useState } from "react";
import Wrapper from "../../assets/wrappers/Register";
import { useLoginMutation } from "../../features/auth/authapi";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email, password }).unwrap();

      if (res) {
        setEmail("");
        setPassword("");
        toast.success(res.msg);
        dispatch(setAuthenticated(true));
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.data?.msg);
      console.log(error);
    }
  };

  return (
    <Wrapper className="container">
      <div className="auth-container">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
    </Wrapper>
  );
};

export default Login;
