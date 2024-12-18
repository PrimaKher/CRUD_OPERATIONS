import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const PORT =process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.post("/Prima",(req,res)=>{
    const fName =req.body.firstName; 
    const lName = req.body.secondName;
const fullName = fName + lName;

    res.json({name:fullName});
});
app.use(express.static(path.join(__dirname,"views")))
app.listen(PORT,()=>{
    console.log(`Server is running  on http://localhost:${PORT}`);
});

