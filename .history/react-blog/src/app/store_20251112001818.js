// import { configureStore } from "@reduxjs/toolkit";
// import otpReducer from "../features/otp/otpSlice";
import 

export const store = configureStore({
  reducer: {
    otp: otpReducer,
  },
});
