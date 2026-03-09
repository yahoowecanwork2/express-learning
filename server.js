import express from "express";
import { add, multiply } from "./pages/sum.js";
const app = express();
const PORT = 5400;
console.log(add(2, 4));
console.log(multiply(2, 2));
app.get("/", (req, res) => {
  res.send("Express Server Running ");
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
