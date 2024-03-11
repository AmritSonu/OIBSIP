import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export { User };
