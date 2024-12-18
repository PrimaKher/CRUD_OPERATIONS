import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import path from 'path';

import {fileURLToPath} from 'url';

const app = express();
// const PORT = 3000


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","PortSecond.html"))

})

app.get("/",(req,res)=>{
    res.json({"message":"HI THIS IS PRIMA!!"})
})

app.use(express.static(path.join(__dirname,"views")))
app.listen(process.env.PORT,()=>{
    console.log("Server is running  on http://localhost:${process.env.PORT}")
})
