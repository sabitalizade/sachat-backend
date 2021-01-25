import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Pusher from "pusher"


//app config
const app=express();
const dbConnection="mongodb+srv://admin:admin@chat.jhrtz.mongodb.net/chat?retryWrites=true&w=majority"
const PORT =process.env.PORT || 3030



//pusher cinfig

const pusher = new Pusher({
  appId: "1143480",
  key: "5e158d5fe3e9f7113dc8",
  secret: "52750c15fa700072004f",
  cluster: "eu",
  useTLS: true
});





//db config

mongoose.connect(dbConnection,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db = mongoose.connection

db.once("open",()=>{
    console.log("db connected")
const dbCollection=db.collection("messages")
const msgstrem= dbCollection.watch()

msgstrem.on("change",change=>{
    if(change.operationType=="insert"){
        const data=change.fullDocument
        // console.log(data)
        pusher.trigger("asyachannel", "asyaevent", {
            name:data.name,
            message: data.message,
            timestamp:data.timestamp,
            recived:data.recived
          });

    }else{
        console.log("error")
    }
})

})

// midleware
app.use(cors());
app.use(express.json());


///request 
import userRouter from "./router/userRouter.js"
import messageRouter from "./router/messageRouter.js"

app.get("/",(req,res)=>{
    res.send("fuck you")
})

app.use("/",userRouter)
app.use("/",messageRouter)

//listen 


app.listen(PORT,()=>{
    console.log(`App start http://localhost:${PORT}`)
})