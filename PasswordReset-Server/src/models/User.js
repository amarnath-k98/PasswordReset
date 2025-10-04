import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiry: {
    type: Date,
  },
}, { timestamps: true });


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    return await bcrypt.compare(userPassword, this.password);
  } catch (err) {
    console.error(err);
    return false;
  }
};


const User = model("User", userSchema);
export default User;