import express from "express";
const app = express();
const PORT = 5400;
import path from "path";
app.get("/", (req, res) => {
  const absPath = path.resolve("view/file/home.html");
  res.sendFile(absPath);
});
app.get("/login", (req, res) => {
  const absPath = path.resolve("view/file/login.html");
  res.sendFile(absPath);
});
app.get("/about", (req, res) => {
  const absPath = path.resolve("view/file/about.html");
  res.sendFile(absPath);
});
app.use((req, res) => {
  const absPath = path.resolve("view/file/404.html");
  res.sendFile(absPath);
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
