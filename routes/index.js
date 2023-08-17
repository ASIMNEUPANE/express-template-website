const router = require('express').Router();
const qrcode = require('../modules/qrcode')
const

router.get('/qr', async (req,res)=>{
    const {qr} = req.query;
    const qrdata = await qrcode.toDataURL(qr)
    res.send(`<img src="${qrdata}"><img>`);


})

router.get('/cc',async(req,res)=>{
    
    const toConvert = new cc();


    res.send(currencyConverter)

})




module.exports = router;