// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/",(req,res)=>{
//     res.send("HELLO EVERYONE!!!????");
// })

// app.listen(PORT,()=>{
//     console.log('Server is running on http://localhost:3000');
// })

//ANOTHER WAY TO DISPALY  HOST A FILE .

import express from 'express';
0
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const PORT = 3000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","PortSecond.html"))

})

app.use(express.static(path.join(__dirname,"views")))
app.listen(PORT,()=>{
    console.log("Server is running  on http://localhost:${PORT}")
})
