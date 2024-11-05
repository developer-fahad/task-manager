// app/models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    default: "Jhon Doe",
    validate: {
      validator: function (value) {
        return value !== ""; // Prevents empty strings
      },
      message: "Full name cannot be an empty string",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: Number,
    required: true,
    minlength: 8,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.models.User || mongoose.model("User", userSchema);
export default Users;
