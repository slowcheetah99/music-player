import { createSlice } from "@reduxjs/toolkit";

export const currentlyPlaying = createSlice({
  name: "currentlyPlaying",
  initialState: {
    currentlyPlaying: {},
  },
  reducers: {
    selectCurrentlyPlaying: (state, action) => {
      state.currentlyPlaying = action.payload;
    },
  },
});

export const { selectCurrentlyPlaying } = currentlyPlaying.actions;

export default currentlyPlaying.reducer;
