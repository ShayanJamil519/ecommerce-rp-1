import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true, // Enforce uniqueness for email addresses
  },
  phone: {
    type: Number,
    required: [true, "Please enter a phone number"],
    unique: true, // Enforce uniqueness for phone numbers
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

const User = mongoose.models.User  || mongoose.model("User", userSchema); // Use singular "User" as the model name

export default User;
