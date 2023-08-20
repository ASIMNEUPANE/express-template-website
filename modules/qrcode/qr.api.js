const router = require('express').Router();
const qrController =require('./qr.controller')


 router.post("/", async (req, res,next) => {
      
    
      try{
      const {name : qr} = req.body;
    const result = await qrController.creatQr(qr)
      console.log({req})
    
      res.send(`<img src="${result}"><img>`);
    
      }
    
      catch(e){
       next(e);
      }
    
    });


router.get('/', (req,res)=>{
    res.send("QR api is working")
});


module.exports= router;