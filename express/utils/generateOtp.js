export const generateOtp = () => {
  // 6-digit numeric OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const getExpiryTime = () => {
  const dt = new Date();
  dt.setMinutes(dt.getMinutes() + 2); // expires in 2 minutes
  return dt;
};
