import express from "express";
const app = express();
const PORT = 5400;
app.get("/", (req, res) => {
  res.send(`
 <form action="/submit" method="POST">
    
      <input type="text" placeholder="Enter your name" name="name"><br><br>
      
      <input type="email" placeholder="Enter your email" name="email"><br><br>
      
      <input type="password" placeholder="Enter your password" name="password"><br><br>

      <button type="submit">Submit</button>

    </form>
    
    `);
});
app.post("/submit", (req, res) => {
  console.log(req.body); // form data

  res.send(`<h1>Data summited</h1>`);
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
