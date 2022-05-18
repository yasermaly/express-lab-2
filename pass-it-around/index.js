const express = require('express');
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send(`99 Bottles of beer on the wall - <a href="98">take one down, pass it around</a>`)
    
});

app.get("/:numberOfBottles", (req, res) => {
    if(req.params.numberOfBottles === "0") {
        res.send(`${req.params.numberOfBottles} bottles of beer on the wall. <a href="/">Start all over</a>`)
    } else if(req.params.numberOfBottles) {
        res.send(`${req.params.numberOfBottles} bottles of beer on the wall. <a href="${req.params.numberOfBottles - 1}">take one down, pass it around</a>`)
    }
})





app.listen(port, () => {
    console.log("listening on port", port);
})