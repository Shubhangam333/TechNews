import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  dob: {
    type: Date,
    default: Date.now(),
  },
  gender: {
    type: String,
    required: true,
  },
  mobile: { type: String, default: "" },
  address: { type: String, default: "" },
  bio: {
    type: String,
    default: "",
    maxlength: 400,
  },
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  ],
  website: { type: String, default: "" },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare Password

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("user", UserSchema);
