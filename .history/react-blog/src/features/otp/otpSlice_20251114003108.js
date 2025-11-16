import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/otp";

export const sendOtp = createAsyncThunk("otp/sendOtp", async (phone, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/send`, { phone });
    return { ...res.data, phone };
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const verifyOtp = createAsyncThunk("otp/verifyOtp", async ({ phone, otp }, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/verify`, { phone, otp });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const resendOtp = createAsyncThunk("otp/resendOtp", async (phone, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/resend`, { phone });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    user_id:null,
    phone: "",
    otp: "",
    loading: false,
    message: "",
    success: false,
    timer: 0
  },
  reducers: {
    setPhone(state, action) { state.phone = action.payload; },
    setOtp(state, action) { state.otp = action.payload; },
    decrementTimer(state) { if (state.timer > 0) state.timer -= 1; },
    resetTimer(state) { state.timer = 120; }
  },
  extraReducers: (b) => {
    b.addCase(sendOtp.pending, (s) => { s.loading = true; s.message = ""; })
     .addCase(sendOtp.fulfilled, (s, a) => {
       s.loading = false;
       s.message = a.payload.message || "OTP sent";
       s.success = a.payload.success;
       s.timer = 120;
       s.phone = a.payload.phone || s.phone;
     })
     .addCase(sendOtp.rejected, (s, a) => {
       s.loading = false;
       s.message = a.payload?.message || a.payload || "Failed to send OTP";
     })

     .addCase(verifyOtp.pending, (s) => { s.loading = true; s.message = ""; })
     .addCase(verifyOtp.fulfilled, (s, a) => {
       s.loading = false;
       
       s.message = a.payload.message || "Verified";
       s.success = a.payload.success;
     })
     .addCase(verifyOtp.rejected, (s, a) => {
       s.loading = false;
       s.message = a.payload?.message || a.payload || "Verification failed";
     })

     .addCase(resendOtp.pending, (s) => { s.loading = true; })
     .addCase(resendOtp.fulfilled, (s, a) => {
       s.loading = false;
       s.message = a.payload.message || "OTP resent";
       s.timer = 120;
     })
     .addCase(resendOtp.rejected, (s, a) => {
       s.loading = false;
       s.message = a.payload?.message || a.payload || "Resend failed";
     });
  }
});

export const { setPhone, setOtp, decrementTimer, resetTimer } = otpSlice.actions;
export default otpSlice.reducer;
