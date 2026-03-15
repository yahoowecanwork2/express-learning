import express from "express";
const app = express();
const PORT = 5400;

function checkAgeRouteMiddleware(req, resp, next) {
  if (!req.query.age || req.query.age < 18) {
    resp.send("you are not allowed to used this website  ");
  } else {
    next();
  }
}

app.get("/", (req, res) => {
  res.send(`<h1>home page </h1>`);
});
app.get("/login", (req, res) => {
  res.send(`<h1>login page </h1>`);
});
app.get("/admin", (req, res) => {
  res.send(`<h1>admin page </h1>`);
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
