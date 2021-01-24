import mongoose from "mongoose"

const messageSchema=mongoose.Schema({
    name:String,
    message:String,
    timestamp:String,
    recived:Boolean
})


export default mongoose.model("messages",messageSchema);