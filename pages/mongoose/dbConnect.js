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
app.use(express.json());
app.get("/", async (req, res) => {
  const userData = await userModal.find();

  res.send(userData);
});
app.post("/save", async (req, res) => {
  //   const userData = await userModal.find();
  console.log(req.body);
  const userData = await userModal.create(req.body);
  const { name, age, email } = req.body;
  if (!req.body || !name || !age || !email) {
    res.send({
      massage: "data not saved",
      success: false,
      storInfo: null,
    });
  }
  res.send({
    massage: "data saved",
    success: true,
    storInfo: userData,
  });
});
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body, id);
  const userData = await userModal.findByIdAndUpdate(id, { ...req.body });

  res.send({
    massage: "data update",
    success: true,
    info: userData,
  });
});
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const userData = await userModal.findByIdAndDelete(id);

  res.send({
    massage: "data deleted",
    success: true,
    info: userData,
  });
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
