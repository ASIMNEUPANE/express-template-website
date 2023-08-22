const router = require("express").Router();

router.get('/', (req,res)=>{
res.render("index", {data: "helloworld"})
})





module.exports = router;