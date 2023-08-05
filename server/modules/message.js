import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    convoId:{
        type:String
    },
    recieverId:{
        type:String
    },
    senderId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},{
    timestamps:true
});

const message = mongoose.model("Message",MessageSchema);
export default message;