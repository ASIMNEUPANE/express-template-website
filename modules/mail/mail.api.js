const router = require("express").Router();
const mailService = require("../../services/mailer");

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    response = await mailService.sendEmail({
      from: "asimneupane11@gmail.com",
      to: "asimneupane11@gmail.com",
      message: JSON.stringify(req.body),
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
