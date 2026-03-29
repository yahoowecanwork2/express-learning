import mongoose from "mongoose";
const usersSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
export default usersSchema;
