import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAuthenticated, setUser } from "./features/auth/authSlice";
import Error from "./pages/Error";
import PrivateRoute from "./Routes/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import { useProfileMutation } from "./features/profile/profileapi";

function App() {
  const [getUserInfo] = useProfileMutation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchInfo = async () => {
      if (isAuthenticated) {
        try {
          const res = await getUserInfo().unwrap();
          if (res.user) {
            dispatch(setUser(res.user));
          }
        } catch (error) {
          console.log(error);
          dispatch(setAuthenticated(false));
          localStorage.removeItem("user");
        }
      }
    };
    fetchInfo();
  }, [isAuthenticated, dispatch, getUserInfo]);

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
