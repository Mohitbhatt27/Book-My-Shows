import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosInstance } from "../config/AxiosInstance";
import TheatreDataTypes from "../types/TheatreData";

export const addNewTheatre = createAsyncThunk(
  "theatres/add",
  async (data: TheatreDataTypes) => {
    try {
      const response = AxiosInstance.post("/mba/api/v1/theatres", data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      return await response;
    } catch (error) {
      console.log("Error while adding theatre", error);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
};

const theatreSlice = createSlice({
  name: "theatres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewTheatre.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default theatreSlice.reducer;
