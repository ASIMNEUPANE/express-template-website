const router = require('express').Router()
const mailService = require('../../services/mailer')

router.post('/', async(req,res,next)=>{

try{
const {from, to , message}= req.body
response = await mailService.sendEmail({from, to , message})
res.send(response);
}
catch(e){
    next(e)
}




})




module.exports = router