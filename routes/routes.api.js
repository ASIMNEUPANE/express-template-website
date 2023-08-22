const router = require("express").Router();
const ccRouter = require('../modules/cc/cc.api')
const qrRouter = require('../modules/qrcode/qr.api')
const mailerRouter = require('../modules/mail/mail.api')
const pdfRouter = require('../modules/pdf/pdf.api')
router.get('/', (req,res)=>{


    
res.send('api is working')
})



router.use('/cc', ccRouter);

router.use('/qr', qrRouter);
router.use('/mail', mailerRouter);

router.use('/pdf', pdfRouter)


module.exports = router;