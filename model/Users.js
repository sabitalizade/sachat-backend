import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

export default mongoose.model('users', usersSchema);