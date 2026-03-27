import cookieParser from "cookie-parser";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 5400;

app.use(cookieParser());
app.get("/", (req, res) => {
  //   res.cookie("name", "neha");
  //   bcrypt.genSalt(10, function (err, salt) {
  //     bcrypt.hash("pololololo", salt, function (err, hash) {
  //       console.log(hash);

  //       // Store hash in your password DB.
  //     });
  //   });
  let token = jwt.sign({ email: "ny663922@gmail.com" }, "secret");
  res.cookie("token", token);
  console.log(token);
  res.end("token");
});
app.get("/read", (req, res) => {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);

  res.end("read");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
