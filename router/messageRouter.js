import express from "express"
import Message from "../model/messages.js"

const router =express.Router();




router.get('/message/all',(req,res)=>{
    Message.find((err,data)=>{
        if(!err){
            res.status(201).send(data)
        }else{
            res.status(500).send(err)
        }
    })
})
router.post('/message/new',(req,res)=>{
    const messageBody=req.body
    Message.create(messageBody,(err,data)=>{
        if(!err){
            res.status(201).send(data)
        }else{
            res.status(500).send(err)
        }
    })
})

router.post("/message/deleteall",(req,res)=>{
    // console.log(req.body)
    Message.deleteMany({},data=>{
        console.log(data)
        res.status(200).send("All messages deleted")
    } );
})


export default router