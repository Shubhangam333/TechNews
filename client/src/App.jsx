import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  useCheckAuthStatusQuery,
  useProfileMutation,
} from "./features/auth/authapi";
import { setAuthenticated, setUser } from "./features/auth/authSlice";
import Error from "./pages/Error";
import PrivateRoute from "./Routes/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { data, error } = useCheckAuthStatusQuery();
  const [getUserInfo] = useProfileMutation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchInfo = async () => {
      if (isAuthenticated) {
        try {
          const res = await getUserInfo().unwrap();
          if (res) {
            dispatch(setUser(res.user));
            dispatch(setAuthenticated(true));
            JSON.stringify(localStorage.setItem("isAuth", true));
          }
        } catch (error) {
          console.log(error);
          dispatch(setAuthenticated(false));
          JSON.stringify(localStorage.setItem("isAuth", false));
          localStorage.removeItem("user");
        }
      }
    };
    fetchInfo();
  }, [isAuthenticated, dispatch, getUserInfo]);
  useEffect(() => {
    if (data) {
      dispatch(setAuthenticated(true));
    }

    if (error) {
      dispatch(setAuthenticated(false));
      localStorage.removeItem("user");
    }
  }, [data, dispatch, error]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
