const router = require('express').Router();

// router.get('/',(req,res)=>{
    // res.send("get response")
// })
router.get('/:first/:last',(req,res)=>{
    const{first , last} = req.params;
    console.log(first + last)
    res.send("get response")
})
router.post('/post',(req,res)=>{
    res.send("get posts")
})
router.put('/post',(req,res)=>{
    res.send("get put")
})
router.delete('/post',(req,res)=>{
    res.send("get delete")
})



module.exports = router;