import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to save address info
export const saveAddressInfo = createAsyncThunk(
  "address/saveAddressInfo",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/address/save", formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Server error" });
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    data: {},
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetAddressState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveAddressInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveAddressInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(saveAddressInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { resetAddressState } = addressSlice.actions;
export default addressSlice.reducer;
