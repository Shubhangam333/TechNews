import { configureStore } from "@reduxjs/toolkit";
import { authapi } from "../auth/authapi";
import navbarReducer from "../navbar/navbarSlice.js";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    navbar: navbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware),
});
