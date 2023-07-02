import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

export const heroSectionSlice = createSlice({
  name: "heroSectionPage",
  initialState,
  reducers: {
    listPageForward: (state) => {
      state.page = state.page < 2 ? state.page + 1 : 0;
    },
    listPageBackward: (state) => {
      state.page = state.page > 0 ? state.page - 1 : 2;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { listPageForward, listPageBackward, setPage } = heroSectionSlice.actions;
export default heroSectionSlice.reducer;
