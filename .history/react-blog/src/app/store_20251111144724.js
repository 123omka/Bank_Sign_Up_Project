import { configureStore } from "@reduxjs/toolkit";
import otpReducer from "../features/otp/otpSlice";

export const store = configureStore({
  reducer: {
    otp: otpReducer,
  },
});
