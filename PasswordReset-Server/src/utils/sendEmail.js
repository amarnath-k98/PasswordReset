import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to, subject, html) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Recipe App <noreply@resend.dev>",
      to,
      subject,
      html,
    });

    if (error) throw error;
    console.log("Email sent to:", to);
  } catch (err) {
    console.error("Resend email failed:", err.message || err);
    throw err;
  }
};

// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export const sendEmail = async (to, subject, html) => {
//   try {
//     const msg = {
//       to,
//       from: process.env.SENDGRID_SENDER,
//       subject,
//       html,
//     };

//     await sgMail.send(msg);
//     console.log("Email sent to:", to);
//   } catch (err) {
//     console.error("SendGrid email failed:", err.response?.body || err.message);
//     throw err;
//   }
// };

// import nodemailer from "nodemailer";

// export const sendEmail = async (to, subject, html) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Recipe App" <${process.env.EMAIL_USER}>`,
//       to,
//       subject,
//       html,
//     });

//     console.log("Email sent to:", to);
//   } catch (err) {
//     console.error("Email sending failed:", err.message);
//     throw err;
//   }
// };
