import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Async thunk to save contact & employment data
export const saveContactEmployment = createAsyncThunk(
  "contactEmployment/save",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/contact-employment/save", formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Server error");
    }
  }
);

const contactEmploymentSlice = createSlice({
  name: "contactEmployment",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveContactEmployment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveContactEmployment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(saveContactEmployment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactEmploymentSlice.reducer;
