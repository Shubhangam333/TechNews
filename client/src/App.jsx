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
import { useProfileQuery } from "./features/profile/profileapi";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";

function App() {
  const { data, error, refetch } = useProfileQuery();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchInfo = async () => {
      if (isAuthenticated) {
        refetch();
        if (data) {
          dispatch(setUser(data.user));
        }
        if (error) {
          dispatch(setAuthenticated(false));
          localStorage.removeItem("user");
        }
      }
    };
    fetchInfo();
  }, [isAuthenticated, dispatch, data, error, refetch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post/createPost" element={<CreatePostPage />} />
        </Route>
        <Route path="/:category/:title" element={<PostDetailPage />} />
        <Route path="/:category/" element={<CategoryDetailPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
