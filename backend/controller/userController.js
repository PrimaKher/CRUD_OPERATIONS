import User from "../models/userModel.js"



export const createUser = async(req,res)=>{
    try{
        const userData = User(req.body);
        if(!userData){//explicitly saying that userdata is empty by using !
            res.status(404).json({msg:"User not found"});
        }
        await userData.save();
        res.status(200).json({msg:"User created sucessfully"});

    }
    catch(error){
            res.status(500).json({err:error})
    }
}
//---------

export const getAll = async(req,res)=>{
    try{
        const userData = await User.find();
        if(!userData){res.status(404).json({msg:"Usr not found"});}
    res.status(200).json(userData);
    }
    catch(error){
        res.status(500).json({err:error})
    }
}
//------------
export const getOne = async (req,res)=>{
        try{
            const id = req.params.id;
            const userData = await User.findById(id);
            if(!userData){
                req.status(404).json({msg:"User doesn't exist"});
            }
            res.status(200).json(userData);
        }
        catch(error){
            res.status(500).json({err:error});
        }
    }


//--------------

export const updateUser = async (req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({msg:"User does not exist "});
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User ahs been updated sucessfully!!!"});

    }
    catch(error){
        res.status(500).json({err:error});

    }
}

//-------------

export const deleteUser = async (req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({msg:"User does not exist "});
        }
        const updatedData = await User.findByIdAndDelete(id,req.body);
        res.status(200).json({msg:"User ahs been deleted sucessfully!!!"});

    }
    catch(error){
        res.status(500).json({err:error});

    }
}