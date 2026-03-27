import cookieParser from "cookie-parser";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jwt";
const app = express();
const PORT = 5400;

// app.use(cookieParser());
app.get("/", (req, res) => {
  //   res.cookie("name", "neha");
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("pololololo", salt, function (err, hash) {
      console.log(hash);

      // Store hash in your password DB.
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
