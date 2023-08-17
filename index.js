const express = require("express");
const router = require("./routes/index");
const app = express();

app.use("/", router);

app.listen(3002);

console.log("app is running on port 3001");
