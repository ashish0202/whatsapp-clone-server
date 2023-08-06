import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const username = "ashish";
const password = "ashish121";

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-enwivqh-shard-00-00.wneo4pp.mongodb.net:27017,ac-enwivqh-shard-00-01.wneo4pp.mongodb.net:27017,ac-enwivqh-shard-00-02.wneo4pp.mongodb.net:27017/?ssl=true&replicaSet=atlas-udsj8w-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-file-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({storage}); 