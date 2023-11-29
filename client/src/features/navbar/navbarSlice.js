import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchActive: false,
  megaMenuActive: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setSearchActive: (state) => {
      state.searchActive = !state.searchActive;
      state.megaMenuActive = false;
    },
    setMegaMenuActive: (state) => {
      state.megaMenuActive = !state.megaMenuActive;
      state.searchActive = false;
    },
  },
});

export const { setSearchActive, setMegaMenuActive } = navbarSlice.actions;

export default navbarSlice.reducer;
