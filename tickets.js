
const router=require("express").Router()

let tickets=[
 {id:1,title:"Example ticket",status:"OPEN"}
]

router.get("/",(req,res)=>{
 res.json(tickets)
})

router.post("/",(req,res)=>{
 const ticket={
  id:Date.now(),
  title:req.body.title,
  status:"OPEN"
 }
 tickets.push(ticket)
 res.json(ticket)
})

module.exports=router
