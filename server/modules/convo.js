import mongoose from "mongoose";

const ConvoSchema = new mongoose.Schema({
    members:{
        type:Array,
    },
    message:{
        type:String,
    }},
    {
        timestamps:true
    })

const Convo = mongoose.model('Convo',ConvoSchema);

export default Convo;