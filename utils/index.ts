export const getURL = () => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost";
  if (url.includes("http")) return url.split("//")[1];
  return url;
};
