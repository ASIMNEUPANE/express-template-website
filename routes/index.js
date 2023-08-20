const router = require("express").Router();

const { Router } = require("express");
const apiRoutes = require("./routes.api");
const uiRoutes = require("./routes.ui");

router.use("/api/v1", apiRoutes);
router.use("/", uiRoutes);




























// Qrcode Generator

// router.post("/qr/", async (req, res) => {
//   // const { qr } = req.query;
//   // const { name } = req.params;

//   try{
//   const {name : qr} = req.body;

//   console.log({req})

//   const qrdata = await qrcode.toDataURL(qr);
//   res.send(`<img src="${qrdata}"><img>`);

//   }

//   catch(err){
//     res.send("error found")
//   }

// });

// // Currency-Convertor

// router.post("/cc", async (req, res) => {
//   const { from, to, amount } = req.body;
//   console.log(req.body);
//   const currencyConverter = new cc({
//     from: from,
//     to: to,
//     amount: Number(amount),
//   });
//   const convo = await currencyConverter.convert();
//   res.send(`<h1>${convo} </h1>`);
// });

// PDF generator

module.exports = router;
