const router = require("express").Router();
const cc = require("../modules/cc/cc");
const qrcode = require("../modules/qrcode/index");

router.get("/qr", async (req, res) => {
  const { qr } = req.query;
  const qrdata = await qrcode.toDataURL(qr);
  res.send(`<img src="${qrdata}"><img>`);
});
router.get("/cc", async (req, res) => {
  const { from, to, amount } = req.query;
  const currencyConverter = new cc({
    from: from,
    to: to,
    amount: Number(amount),
  });
  const convo = await currencyConverter.convert();
  res.send(`<h1>${convo} </h1>`);
});

module.exports = router;
