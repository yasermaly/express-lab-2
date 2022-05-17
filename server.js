const express = require('express');
const app = express();
const port = 3000;

// Greeting
app.get("/greeting/:name", (req, res) => {
  res.send("What's up " + req.params.name + "! It's great to see you!");
})

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Tip = " + (req.params.total / req.params.tipPercentage));
});

app.listen(port, () => {
  console.log("Listening on port", port)
});