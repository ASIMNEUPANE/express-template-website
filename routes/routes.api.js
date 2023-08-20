const router = require("express").Router();
const ccRouter = require('../modules/cc/cc.api')
const qrRouter = require('../modules/qrcode/qr.api')
const mailer = require('../modules/mail/mail.api')
router.get('/', (req,res)=>{


    
res.send('api is working')
})



router.use('/cc', ccRouter);

router.use('/qr', qrRouter);
router.use('/mail', mailer);


module.exports = router;