const router = require("express").Router();

const ccController = require("./cc.controller");

router.get("/", (req, res) => {
  res.send("cc API is working");
});

router.post("/", async(req, res, next) => {
  try {
    const { from, to, amount } = req.body;
    const response =await ccController.convertor({ from, to, amount });
    res.send({result :response});
  } catch (e) {
    next(e);
  }
});

module.exports = router;
