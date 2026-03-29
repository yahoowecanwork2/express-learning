import mongoose from "mongoose";
async function dbConnection() {
  await mongoose.connect("mongodb://localhost:27017/ecommers");
  const schema = mongoose.Schema({
    name: String,
    email: String,
    age: String,
  });
  const User = mongoose.model("User", schema);
  const userData = await User.find();
  console.log(userData);
}
dbConnection();
