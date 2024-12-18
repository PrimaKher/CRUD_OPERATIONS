import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from"mongoose";
import route from './routes/userRoutes.js'


dotenv.config();
import User from "./models/userModel.js";

const app = express();
const PORT =process.env.PORT;
const URL = process.env.MONGODB_URL;
console.log(URL);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("DB connected Successfully!!");
    app.get("/",(req,res)=>{
        res.send("CONNECTION ESTABLISHED!!!")
    })
    app.listen(PORT,()=>{
        console.log(`Server is running  on http://localhost:${PORT}`);
    });
    
})
.catch((err)=>{
    console.error("Connection failed : ",err)
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname,"views")))
app.use("/api",route);
// async function createUser(){
//     const user= new User({
//         name:"Prima",
//         email:"primakher@gmail.com",
//         password:"1234",
//         age:21
//     });
//     const result = await user.save();
//     console.log("User created:",result);
// }
// createUser();






