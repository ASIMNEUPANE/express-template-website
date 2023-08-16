const express = require('express')
const app = express();

app.get("/:name/:lastName", (req,res)=>{
    console.log({req})

    const {name , lastName} = req.params;

    res.send(`your input is ${name} ${lastName}`)
});

app.listen(3001);

console.log("app is running on port 3001");