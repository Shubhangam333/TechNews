import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice.js";
import navbarReducer from "../navbar/navbarSlice.js";
import { authapi } from "../auth/authapi.js";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    navbar: navbarReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware),
});
