# 🔐 Password Reset Flow – Full Stack Implementation

This project implements a secure and production-ready password reset flow for a web application. It includes email verification, token-based password reset, and proper database updates. Built with **Node.js**, **Express**, **MongoDB**, and **React**, it ensures a smooth user experience and robust backend logic.

---

## 📦 Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT for authentication
- Nodemailer for email delivery
- Crypto for secure token generation

### Frontend
- React + Redux Toolkit
- RTK Query for API integration
- TailwindCSS for responsive UI
- React Router for navigation

---

## 🔁 Password Reset Flow

1. **Forgot Password Page**
   - User enters their email.
   - Backend checks if the user exists.
   - If found, a secure random token is generated.
   - Token is stored in the database with a 15-minute expiry.
   - A reset link is emailed to the user.

2. **Reset Password Page**
   - User clicks the link and lands on `/reset-password/:token`.
   - Token is verified against the database and expiry.
   - If valid, user can enter a new password.
   - Password is securely hashed and updated.
   - Token is cleared from the database.

---

## 🧪 Features

- 🔒 Secure password hashing with bcrypt
- 📧 Email delivery via Gmail SMTP
- ⏳ Token expiry enforcement (15 minutes)
- 🧼 Clean code with modular structure and comments
- 📱 Responsive UI with TailwindCSS breakpoints
- 🧠 Smart state management with Redux Toolkit
- 🔄 Cache-aware API integration using RTK Query



## 🚀 Setup Instructions

### 1. Clone the Repository
  --- bash ---
- git clone https://github.com/your-username/password-reset-app
- cd password-reset-app


## API Endpoints
- Method  |  Endpoint                   |  Description
----------------------------------------------------------------------
- POST    | /auth/register              |  Register new user
- POST    | /auth/login                 |  Login user
- POST    | /auth/forgot-password       |  Send reset link via email 
- POST    | /auth/reset-password/:token |  Reset password using token



# 📌 Notes
- The reset link expires after 15 minutes.
- All forms include basic validation and error handling.
- UI includes icons, fonts, and responsive layout.
- Code follows clean naming conventions and comments.

# 🧠 Author
- Built by Amarnath K, a full-stack developer focused on secure backend  systems, responsive UI/UX, and production-grade deployments.
