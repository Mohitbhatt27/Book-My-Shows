import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosInstance } from "../config/AxiosInstance";

interface MovieData {
  name: string;
  description: string;
  casts: string[];
  trailerUrl: string;
  language: string;
  releaseDate: string;
  director: string;
  releaseStatus: string;
  poster: string;
  genre: string;
  rating: string;
  voteCount: string;
}

export const createMovie = createAsyncThunk(
  "movies/create",
  async (data: MovieData) => {
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

const initialState = {
  isLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMovie.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
    });
  },
});

export default movieSlice.reducer;
