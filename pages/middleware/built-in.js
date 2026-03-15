import { resolve } from "dns";
import express from "express";
import path from "path";
const app = express();
const PORT = 5400;

function checkAgeRouteMiddleware(req, resp, next) {
  if (!req.query.age || req.query.age < 18) {
    resp.send("you are not allowed to used this website  ");
  } else {
    next();
  }
}
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  const absolutpath = path.resolve("./view/file/home.html");
  res.sendFile(absolutpath);
});
app.get("/login", (req, res) => {
  res.send(`<form action="submit" method="POST">

  <label>Name</label>
  <input type="text" name="name" required />
  <br><br>

  <label>Email</label>
  <input type="email" name="email" required />
  <br><br>

  <label>Password</label>
    <input type="password" name="password" required />

  <br><br>

  <button type="submit">Submit</button>

</form>`);
});
app.post("/submit", (req, res) => {
  console.log(req.body);

  res.send(`<h1>sumbit page </h1>`);
});
app.get("/users", checkAgeRouteMiddleware, (req, res) => {
  res.send(`<h1>users page </h1>`);
});
app.get("/product", checkAgeRouteMiddleware, (req, res) => {
  res.send(`<h1>product page </h1>`);
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
