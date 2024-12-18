import { createUser, getAll, getOne,updateUser,deleteUser} from "../controller/userController.js"
import express from "express"

const route = express.Router();

route.post("/create",createUser);
route.get("/getall",getAll);
route.get("/getone/:id",getOne);
route.put('/update/:id',updateUser);
route.put('/delete/:id',deleteUser);



export default route;