const express = require('express');
const app = express();
const port = 3000;

// Greeting route
app.get("/greeting/:name", (req, res) => {
  res.send("What's up " + req.params.name + "! It's great to see you!");
})

// Tip Calculator route
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Tip = " + (req.params.total / req.params.tipPercentage));
});


// Magic 8 Ball route
app.get("/magic/:question", (req, res) => {
    const responses = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes definitely",
        "You may rely on it", 
        "As I see it yes", 
        "Most likely", 
        "Outlook good",
        "Yes", 
        "Signs point to yes", 
        "Reply hazy try again", 
        "Ask again later",
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again",
        "Don't count on it", 
        "My reply is no", 
        "My sources say no",
        "Outlook not so good", 
        "Very doubtful"
    ];
    let randomIndex = Math.floor(Math.random() * responses.length);
    res.send(`Question: ${req.params.question} & Answer: ${responses[randomIndex]}`);
})

app.listen(port, () => {
  console.log("Listening on port", port)
});