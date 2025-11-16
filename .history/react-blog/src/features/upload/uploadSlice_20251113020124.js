import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Async thunk to upload files
export const uploadDocuments = createAsyncThunk(
  "upload/documents",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/upload/documents", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Server error" });
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    loading: false,
    message: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocuments.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.message = "";
      })
      .addCase(uploadDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(uploadDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default uploadSlice.reducer;
