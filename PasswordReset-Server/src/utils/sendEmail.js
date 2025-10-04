import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (to, subject, html) => {
  try {
    const msg = {
      to,
      from: process.env.SENDGRID_SENDER, // must be a verified sender
      subject,
      html,
    };

    await sgMail.send(msg);
    console.log("Email sent to:", to);
  } catch (err) {
    console.error("SendGrid email failed:", err.response?.body || err.message);
    throw err;
  }
};

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
