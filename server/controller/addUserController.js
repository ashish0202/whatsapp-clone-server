import User from "../modules/user.js"

export const addUser = async (req,res)=>{
    try{
        let exist = await User.findOne({sub:req.body.sub});

        if(exist){
            res.status(200).json({msg:"This user already exist"});
            return;
        }

        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);

    }catch(error){
        res.status(500).json(error.message);
    }
}

export const getUsers = async (req,res) => {
    try{
        let users = await User.find({});
        return res.status(200).json(users);
    }catch(error){
        return res.status(500).json(error.mwssage);
    }
}

 