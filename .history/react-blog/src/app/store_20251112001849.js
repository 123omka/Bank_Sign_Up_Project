// import { configureStore } from "@reduxjs/toolkit";
// import otpReducer from "../features/otp/otpSlice";
import { configureStore} from "@reduxjs/toolkit";
import

export const store = configureStore({
  reducer: {
    otp: otpReducer,
  },
});
