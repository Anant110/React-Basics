const express=require('express')
const User = require('../modals/User')
const bcrypt=require('bcryptjs')
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const router=express.Router()

const JWT_SECRET="Anaisagood$boy"
router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try { 
    let user= await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email is already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      const data={
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET)
      // console.log(jwtData)
      res.json({authtoken})


    } catch (error) {
      console.error(error.message);
      res.status(500).json("Some error is occoured");
    }
})


router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password','Password cannot be blank').exists()
],async(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}=req.body
    try {
      let user=await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please login with correct credentials"})
      }

      const passwordcompare=await bcrypt.compare(password,user.password)
      if(!passwordcompare){
        return res.status(400).json({error:"Please login with correct credentials"})
      }

      const data={
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET)
      // console.log(jwtData)
      res.json({authtoken})
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Some error is occoured");
    }
})

//Route-3 Get user request
router.post('/getuser',fetchuser,async(req,res)=>{
try {
  userID=req.user.id
  // const user=User.findById(userID).select("-password")
  let user = await User.findById(userID);
  user = user.toObject();
  delete user.password; 
  res.send(user)
  
} catch (error) {
  console.error(error.message);
  res.status(500).json("Some error is occoured");
}
})

module.exports=router