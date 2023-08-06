import multer from "multer";
import { GridFsStorage } from 'multer-gridfs-storage';


const storage = new GridFsStorage({
    url: `mongodb://ashish:ashish121@ac-enwivqh-shard-00-00.wneo4pp.mongodb.net:27017,ac-enwivqh-shard-00-01.wneo4pp.mongodb.net:27017,ac-enwivqh-shard-00-02.wneo4pp.mongodb.net:27017/?ssl=true&replicaSet=atlas-udsj8w-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options : {useUnifiedTopology:true,useNewUrlParser:true},
    file: (req,file)=>{
        const match = ["image/jpg","image/png","image/jpeg"]

        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            fileName: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({storage});