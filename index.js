const express = require("express");
const app = express();

app.get("/:name/:lastName", (req, res) => {
  console.log({ req });
  console.log({ query: req.query });

  const { name, lastName } = req.params;
  const { address, number } = req.query;

  res.send(`my name is ${name} ${lastName} and data of user is ${address} ${number}`);
 
});

app.listen(3001);

console.log("app is running on port 3001");
