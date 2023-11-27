import { configureStore } from "@reduxjs/toolkit";
import { authapi } from "../auth/authapi";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware),
});
