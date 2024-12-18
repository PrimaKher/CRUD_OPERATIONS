import mongoose from"mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        
    },{
        timestamps:true
    }
)

const User = mongoose.model("prima",userSchema);

export default User;