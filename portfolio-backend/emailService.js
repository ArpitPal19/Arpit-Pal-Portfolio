import dns from "dns";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  family: 4,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

export default transporter;
