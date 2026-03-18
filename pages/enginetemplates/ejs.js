import express from "express";
const app = express();
const PORT = 5400;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home", { name: "neha", work: "fullstack developer" });
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
