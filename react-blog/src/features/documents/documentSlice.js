import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadDocuments = createAsyncThunk(
  "documents/upload",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Upload failed" });
    }
  }
);

const documentSlice = createSlice({
  name: "documents",
  initialState: { loading: false, success: false, message: "", error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocuments.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(uploadDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(uploadDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default documentSlice.reducer;
