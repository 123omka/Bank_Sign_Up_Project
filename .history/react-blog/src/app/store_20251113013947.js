
import otpReducer from "../features/otp/otpSlice";
import { configureStore} from "@reduxjs/toolkit";
import personalReducer from "../features/personal/personalSlice";
import addressReducer from "../features/address/addressSlice";

export const store = configureStore({
  reducer: {
    otp: otpReducer,
    personal:personalReducer,
      address: addressReducer,
      
  },
});
