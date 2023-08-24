const router = require("express").Router();

router.get('/', (req,res)=>{
res.render("index", {data: "helloworld"})
})
router.get('/signup', (req,res)=>{
res.render("signup", {data: "helloworld"})
})
router.get('/contact', (req,res)=>{
res.render("contact")
})





module.exports = router;