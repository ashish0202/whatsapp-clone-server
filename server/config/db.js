import mongoose from "mongoose";

const Connection = async (USERNAME,PASSWORD)=>{
    
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-enwivqh-shard-00-00.wneo4pp.mongodb.net:27017,ac-enwivqh-shard-00-01.wneo4pp.mongodb.net:27017,ac-enwivqh-shard-00-02.wneo4pp.mongodb.net:27017/?ssl=true&replicaSet=atlas-udsj8w-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log('Database connected successfully');
    }catch(error){
        console.log("Error in connecting with Database",error.message);
    }
}

export default Connection;