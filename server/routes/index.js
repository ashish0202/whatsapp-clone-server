import express from "express";
import {addUser,getUsers} from "../controller/addUserController.js";
import { addConvo,getConvo } from "../controller/addConvoController.js";
import { saveMessage,getMessage } from "../controller/messageController.js";
// import { uploadFile,getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const routes = express.Router();

routes.post("/add",addUser);
routes.get("/users",getUsers);
routes.post("/convo/add",addConvo);
routes.post("/convo/get",getConvo);
routes.post("/message/add",saveMessage);
routes.get("/message/get/:id",getMessage);

//route for uploading and downloading files
// routes.post("/file/upload",upload.single("file"),uploadFile);
// routes.get("/file/:filename",getImage);


export default routes;