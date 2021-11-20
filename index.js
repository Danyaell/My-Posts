const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  console.log("Recived Request");
  
  res.status(200).send("Success");
});

app.listen(3000, () => {
  console.log("I am ready to listen you.");
});
