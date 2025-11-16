export const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

export const getExpiryTime = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 2);
  return now;
};
