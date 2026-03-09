const express = require("express");
const app = express();
const PORT = 5400;
app.get("/", (req, res) => {
  res.send("Express Server Running ");
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
