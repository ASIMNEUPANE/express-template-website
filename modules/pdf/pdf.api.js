const router = require('express').Router()
const pdfConvertor = require('./pdf.controller')

router.post('/',(req,res,next)=>{
try{

    const {text}= req.body;
    const response = pdfConvertor(text)

res.send(response)

}
catch(e){
    next(e)
}



})



module.exports= router