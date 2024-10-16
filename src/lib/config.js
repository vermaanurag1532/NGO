import logo from "/public/images/logoSevaarth.png";

const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Sevaarth",
  contact: {
    email: "info@sevaarth.org",
    phone: "+123 456 7890",
  },
  logo: logo.src,
  socialLinks: {
    facebook: "https://facebook.com/sevaarth",
    twitter: "https://twitter.com/sevaarth",
    instagram: "https://instagram.com/sevaarth",
  },
  public_key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  env: process.env.NODE_ENV,
};

export default config;
