import express from "express";
import {addUser,getUsers} from "../controller/addUserController.js"

const routes = express.Router();

routes.post("/add",addUser);
routes.get("/users",getUsers);

export default routes;