import Message from "../modules/message.js";
import Convo from "../modules/convo.js";

export const saveMessage = async (req,res)=>{
    try{
        const newMessage = Message(req.body);
        
        await newMessage.save();
        await Convo.findByIdAndUpdate(req.body.convoId, { message:req.body.text });

        return res.status(200).json("message has been sent successfully");
    }catch(err){
        return res.status(500).json(err.message);
    }
}


export const getMessage = async (req,res) =>{
    try{
        const messages = await Message.find({ convoId: req.params.id });
        res.status(200).json(messages);
    }catch(err){
        return res.status(500).json(err.message);
    }
}