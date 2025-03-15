import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 223,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 223,
    // unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 223,
  },
});

const UserTable = new mongoose.model("UserTable", UserSchema);

export default UserTable;
