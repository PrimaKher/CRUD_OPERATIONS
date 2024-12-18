import express from 'express';

import dotenv from 'dotenv';
dotenv.config();//helps to load the env files


import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT;


app.use((req,res,next)=>{
    const secretCode = req.query.secret;
    if(secretCode==='1234'){
        req.isAuthorized=true  //req.isAuthorized is only used within teh scope,if want to use elsewhere next(); is used
    }
    else{
        req.isAuthorized=false
    }
    next()
})
app.get("/",(req,res)=>{
    if(req.isAuthorized){
        res.sendFile(path.join(__dirname,"views","PortSecond.html"))  // path.join gives the absolute path of our file.

    }
    else{
        res.send("UNAUTHORIZED :( ")
    }
})

app.use(express.static(path.join(__dirname,"views")))
app.listen(PORT,()=>{
    console.log(`Server is running  on http://localhost:${PORT}`);
})
