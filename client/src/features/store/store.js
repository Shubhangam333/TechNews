import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice.js";
import navbarReducer from "../navbar/navbarSlice.js";
import profileReducer from "../profile/profileSlice.js";
import { authapi } from "../auth/authapi.js";
import { profileapi } from "../profile/profileapi.js";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    [profileapi.reducerPath]: profileapi.reducer,
    navbar: navbarReducer,
    auth: authReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware, profileapi.middleware),
});
