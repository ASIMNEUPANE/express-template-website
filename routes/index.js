const router = require("express").Router();
const cc = require("../modules/cc/cc");
const qrcode = require("../modules/qrcode/index");
const PDFDocument = require("../modules/pdf");
const doc = new PDFDocument;

const fs = require('fs');
// Qrcode Generator

router.post("/qr/", async (req, res) => {
  // const { qr } = req.query;
  // const { name } = req.params;

  const {name : qr} = req.body;

  console.log({req})

  const qrdata = await qrcode.toDataURL(qr);
  res.send(`<img src="${qrdata}"><img>`);
});







// Currency-Convertor

router.post("/cc", async (req, res) => {
  const { from, to, amount } = req.body;
  console.log(req.body);
  const currencyConverter = new cc({
    from: from,
    to: to,
    amount: Number(amount),
  });
  const convo = await currencyConverter.convert();
  res.send(`<h1>${convo} </h1>`);
});

// PDF generator






module.exports = router;
