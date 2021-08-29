const express = require('express');
const userController = require('../controllers/UserController.js');
const userRouters =()=>{
    const routers = express.Router();
    routers.get('/',userController.getAll);
    routers.get('/login',userController.login);
    routers.get('/:id',userController.getId);
    routers.post('/',userController.post);
    return routers;
}
module.exports = userRouters;

