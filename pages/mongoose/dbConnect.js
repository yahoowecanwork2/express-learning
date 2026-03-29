import mongoose from "mongoose";

// async function dbConnection() {
//   await mongoose.connect("mongodb://localhost:27017/ecommers");
//   const schema = mongoose.Schema({
//     name: String,
//     email: String,
//     age: String,
//   });
//   const User = mongoose.model("User", schema);
//   const userData = await User.find();
//   console.log(userData);
// }
// dbConnection();
import express from "express";
import userModal from "../model/userModal.js";
const app = express();
const PORT = 5400;
await mongoose.connect("mongodb://localhost:27017/ecommers").then(() => {
  console.log(".........connected........");
});

app.get("/", async (req, res) => {
  const userData = await userModal.find();

  res.send(userData);
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
