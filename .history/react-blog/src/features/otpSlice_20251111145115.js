import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/otp";

export const sendOtp = createAsyncThunk("otp/sendOtp", async (phone) => {
  const res = await axios.post(`${API_URL}/send`, { phone });
  return res.data;
});

export const verifyOtp = createAsyncThunk("otp/verifyOtp", async ({ phone, otp }) => {
  const res = await axios.post(`${API_URL}/verify`, { phone, otp });
  return res.data;
});

export const resendOtp = createAsyncThunk("otp/resendOtp", async (phone) => {
  const res = await axios.post(`${API_URL}/resend`, { phone });
  return res.data;
});

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    loading: false,
    success: false,
    message: "",
    timer: 120, // 2 minutes countdown
  },
  reducers: {
    decrementTimer: (state) => {
      if (state.timer > 0) state.timer -= 1;
    },
    resetTimer: (state) => {
      state.timer = 120;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => { state.loading = true; })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.success = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.success = action.payload.success;
        state.message = "OTP resent successfully";
        state.timer = 120;
      });
  },
});

export const { decrementTimer, resetTimer } = otpSlice.actions;
export default otpSlice.reducer;
