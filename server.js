const express = require('express');
const app = express();
const port = 3000;

app.get("/:name", (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log("Listening on port", port)
});