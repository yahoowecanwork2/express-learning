import cookieParser from "cookie-parser";
import express from "express";
const app = express();
const PORT = 5400;
import bcrypt from "bcrypt";
// app.use(cookieParser());
app.get("/", (req, res) => {
  res.cookie("name", "neha");
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
      // Store hash in your password DB.
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
