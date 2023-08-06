import { response } from 'express';
import grid from 'gridfs-stream';
import mongoose from 'mongoose';


const URL = "http://localhost:8000";

let gfs,girdFsBucket;
const conn = mongoose.connection;
conn.once('open',()=>{
    girdFsBucket = mongoose.mongo.GridFSBucket(conn.db,{
        bucketName: 'fs'
    });
    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection('fs')

})



export const uploadFile = async (req,res)=>{
    if(!req.file){
        return res.status(404).json('File Not Found');
    }

    const imageURL = `${URL}/file/${req.file.filename}`;

    return res.status(200).json(imageURL);

}


export const getImage = async (req,res) => {
    try{
        const file = await gfs.files.findOne({filename:req.param.filename});

        const readStream = girdFsBucket.openDownloadStream(file._id);
        readStream.pipe(response)
    }catch(err){
        return res.status(500).json(err.message);
    }
}