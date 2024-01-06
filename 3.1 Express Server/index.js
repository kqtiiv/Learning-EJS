import express from "express";
const app = express();
const port = 3000;  // port is locatino of the server

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // callback triggers when server is set up
  console.log(`Server running on port ${port}.`);
});
