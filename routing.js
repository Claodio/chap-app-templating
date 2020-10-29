const  express = require("express");
const router= express.Router();
const controller= require("./controller");

const start_appRoute=router
.get('/',controller.getAll)
.get('/:id',controller.getById)
.post('/',controller.createUser)
.put('/:id',controller.createUser)
.delete('/:id',controller.createUser);

module.exports=start_appRoute