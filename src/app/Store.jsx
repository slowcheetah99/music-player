//this is where we configure our store( state storage )
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shazamCore } from "../services/ShazamCore";
import currentlyPlayingReducer from "../features/currentSong";

export default configureStore({
  reducer: {
    [shazamCore.reducerPath]: shazamCore.reducer,
    currentlyPlaying: currentlyPlayingReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCore.middleware),
});
