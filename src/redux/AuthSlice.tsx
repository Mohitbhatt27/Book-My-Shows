import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosInstance } from "../config/AxiosInstance";

interface AuthState {
  email: string;
  role: string;
  status: string;
  token: string;
  isSignedIn: boolean;
}

const initialState: AuthState = {
  email: localStorage.getItem("email") || "",
  role: localStorage.getItem("role") || "",
  status: localStorage.getItem("status") || "",
  token: localStorage.getItem("token") || "",
  isSignedIn: !!localStorage.getItem("token"),
};

export const signinSlice = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    try {
      const response = await AxiosInstance.post(
        "/mba/api/v1/auth/signin",
        data
      );
      console.log("Signing in with response", response);
      return response;
    } catch (error) {
      console.log("error while signin", error);
    }
  }
);

export const signupSlice = createAsyncThunk(
  "auth/signup",
  async (data: {
    name: string;
    email: string;
    password: string;
    userType: string;
  }) => {
    try {
      const response = await AxiosInstance.post(
        "/mba/api/v1/auth/signup",
        data
      );
      console.log("Sign up with response", response);
      return response;
    } catch (error) {
      console.log("error while signup", error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.email = "";
      state.role = "";
      state.status = "";
      state.token = "";
      state.isSignedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signinSlice.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.email = action.payload?.data?.data?.email;
      state.role = action.payload?.data?.data?.role;
      state.status = action.payload?.data?.data?.status;

      state.token = action.payload?.data?.data?.token;
      state.isSignedIn = true;

      localStorage.setItem("email", state.email);
      localStorage.setItem("role", state.role);
      localStorage.setItem("status", state.status);
      localStorage.setItem("token", state.token);
      localStorage.setItem("isSignedIn", state.isSignedIn.toString());
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
