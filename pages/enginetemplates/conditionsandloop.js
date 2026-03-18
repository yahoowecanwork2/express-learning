import express from "express";
const app = express();
const PORT = 5400;
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.get("/add-user", (req, res) => {
  res.render("addUser");
});
app.post("/submit-user", (req, res) => {
  console.log(req.body);

  res.render("sumitUser", req.body);
});
app.get("/", (req, res) => {
  const users = ["neha", "amit", "varsha", "shalu", "keshav"];
  res.render("users", { users: users });
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
