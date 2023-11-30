import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileModal: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileModal: (state, action) => {
      state.profileModal = action.payload;
    },
  },
});

export const { setProfileModal } = profileSlice.actions;

export default profileSlice.reducer;
