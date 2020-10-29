import {start_appController} from "../controller/controller";
const  express = require("express");
const router= express.Router();

const start_appRoute=router
.get('/',start_appController.getAll)
.get('/:id',start_appController.getById)
.post('/user',start_appController.createUser)
.put('/:id',start_appController.createUser)
.delete('/:id',start_appController.createUser);

export{start_appRoute}