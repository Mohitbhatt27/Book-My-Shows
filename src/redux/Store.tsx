import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./AuthSlice";
import movieSliceReducer from "./MovieSlice";
import ShowSliceReducer from "./ShowSlice";
import TheatreSliceReducer from "./TheatreSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    movies: movieSliceReducer,
    theatres: TheatreSliceReducer,
    shows: ShowSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
