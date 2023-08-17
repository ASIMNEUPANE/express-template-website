const router = require("express").Router();
const cc = require("../modules/cc/cc");
const qrcode = require("../modules/qrcode/index");

router.get("/qr", async (req, res) => {
  const { qr } = req.query;
  const qrdata = await qrcode.toDataURL(qr);
  res.send(`<img src="${qrdata}"><img>`);
});

module.exports = router;
