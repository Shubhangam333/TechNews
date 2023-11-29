import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "../navbar/navbarSlice.js";
import { authapi } from "../auth/authapi.js";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    navbar: navbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware),
});
