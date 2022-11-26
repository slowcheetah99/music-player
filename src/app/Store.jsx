//this is where we configure our store( state storage )
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shazamCore } from "../services/ShazamCore";

export default configureStore({
  reducer: {
    [shazamCore.reducerPath]: shazamCore.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCore.middleware),
});
