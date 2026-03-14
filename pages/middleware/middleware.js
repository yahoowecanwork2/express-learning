import express from "express";
const app = express();
const PORT = 5400;

app.use((req, res, next) => {
  console.log("user is acess" + req.url + "this page");
  next();
});
app.get("/", (req, res) => {
  res.send(`<h1>home</h1>`);
});
app.get("/users", (req, res) => {
  res.send(`<h1>users page</h1>`);
});
app.get("/product", (req, res) => {
  res.send(`<h1>product pages</h1>`);
});
app.listen(PORT, () => {
  console.log(`server is running${PORT}`);
});
