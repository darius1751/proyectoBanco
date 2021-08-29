const express = require('express');
const transactionController = require('../controllers/TransactionController.js');
const transactionRouters =()=>{
    const routers = express.Router();
    routers.get('/',transactionController.getAll);
    routers.get('/:id',transactionController.getByUserId);
    routers.post('/',transactionController.post);
    return routers;
}
module.exports = transactionRouters;