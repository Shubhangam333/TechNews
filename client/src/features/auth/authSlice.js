import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuth")
    ? JSON.parse(localStorage.getItem("isAuth"))
    : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      JSON.stringify(localStorage.setItem("isAuth", action.payload));
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setlogout: (state) => {
      state.user = null;
      state.isAuthenticated = null;
      JSON.stringify(localStorage.setItem("isAuth", false));
      localStorage.removeItem("user");
    },
  },
});

export const { setAuthenticated, setUser, setlogout } = authSlice.actions;

export default authSlice.reducer;
