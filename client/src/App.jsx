import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useCheckAuthStatusQuery } from "./features/auth/authapi";
import { setAuthenticated } from "./features/auth/authSlice";

function App() {
  const { data, error } = useCheckAuthStatusQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setAuthenticated(true));
    }

    if (error) {
      dispatch(setAuthenticated(false));
    }
  }, [data, dispatch, error]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
