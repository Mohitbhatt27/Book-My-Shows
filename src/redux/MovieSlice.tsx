import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosInstance } from "../config/AxiosInstance";
import MovieDataTypes from "../types/Movie";


export const createMovie = createAsyncThunk(
  "movies/create",
  async (data: MovieDataTypes) => {
    try {
      const response = AxiosInstance.post("/mba/api/v1/movies", data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      return await response;
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  }
);

export const getAllMovies = createAsyncThunk("movies/getAll", async () => {
  try {
    const response = AxiosInstance.get("/mba/api/v1/movies");
    return await response;
  } catch (error) {
    console.error("Error in getting all movies", error);
  }
});

const initialState = {
  isLoading: false,
  error: null,
  movieList: [] as MovieDataTypes[],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMovie.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.isLoading = false;
        state.error = null;
        state.movieList = [...state.movieList, action.payload.data.data];
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.isLoading = false;
        state.error = null;
        state.movieList = action.payload.data.data;
      });
  },
});

export default movieSlice.reducer;
