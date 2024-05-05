import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosInstance } from "../config/AxiosInstance";
import ShowDataTypes from "../types/Shows";

export const addNewShow = createAsyncThunk(
  "shows/add",
  async (data: ShowDataTypes) => {
    try {
      const response = await AxiosInstance.post("/mba/api/v1/shows", data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      return await response;
    } catch (error) {
      console.log("Error while adding show", error);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
};

const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(addNewShow.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default showSlice.reducer;