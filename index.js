const express = require("express");
const router = require("./routes/index");
const app = express();


app.use(express.json());
app.use("/", router);



app.listen(3008);

console.log("app is running on port 3008");
