import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const savePersonalInfo = createAsyncThunk(
  "personal/savePersonalInfo",
  async (data) => {
    const res = await axios.post("http://localhost:5000/api/users/personal-info", data);
    return res.data;
  }
);

const personalSlice = createSlice({
  name: "personal",
  initialState: {
    loading: false,
    message: "",
  },
  reducer:{},
  extraReducers: (builder) => {
    builder
      .addCase(savePersonalInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(savePersonalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(savePersonalInfo.rejected, (state) => {
        state.loading = false;
        state.message = "Failed to save data";
      });
  },
});

export default personalSlice.reducer;
