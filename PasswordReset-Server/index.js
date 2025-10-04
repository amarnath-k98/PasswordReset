import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
