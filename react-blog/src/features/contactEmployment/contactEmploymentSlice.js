import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const saveContactEmployment = createAsyncThunk(
  "contactEmployment/save",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/contact-employment/save", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Server error" });
    }
  }
);

const contactEmploymentSlice = createSlice({
  name: "contactEmployment",
  initialState: {
    loading: false,
    message: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveContactEmployment.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.error = "";
      })
      .addCase(saveContactEmployment.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(saveContactEmployment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default contactEmploymentSlice.reducer;
