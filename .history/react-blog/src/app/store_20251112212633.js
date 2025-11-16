
import otpReducer from "../features/otp/otpSlice";
import { configureStore} from "@reduxjs/toolkit";
import personalReducer from "../features/personal/personalSlice";

export const store = configureStore({
  reducer: {
    otp: otpReducer,
  },
});
