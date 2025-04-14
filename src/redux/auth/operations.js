import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (newUserCredentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUserCredentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginCredentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", loginCredentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    setAuthHeader("");
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/getCurrent",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token === null) return;
      setAuthHeader(`Bearer ${token}`);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

function setAuthHeader(value) {
  axios.defaults.headers.common.Authorization = value;
}
