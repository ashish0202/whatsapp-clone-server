import Convo from "../modules/convo.js"


export const addConvo = async (req,res)=>{
    const sender_userID = req.body.senderId;
    const reciever_userID = req.body.recieverId;

    let exist = await Convo.findOne({members:{$all:[reciever_userID,sender_userID]}});

    if(exist){
        return res.status(200).json('Conversation already exist');
    }

    const newConvo = new Convo({
        members:[sender_userID,reciever_userID]
    })

    try{
        await newConvo.save();
        return res.status(200).json("Conversation saved successfully");
    }catch(error){
        return res.status(500).json("Error while saving conversations",error.message);
    }
}


export const getConvo =  async (req,res)=>{
    try{

        const sender_userID = req.body.senderId;
        const reciever_userID = req.body.recieverId;

        let conversation = await Convo.findOne({members:{$all:[reciever_userID,sender_userID]}});
        return res.status(200).json(conversation);

    }catch(error){
        return res.status(500).json("Error while fetching conversations from DB",error.message);
    }
}