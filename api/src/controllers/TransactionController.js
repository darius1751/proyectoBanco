const TransactionModel = require('../models/TransactionModel');
const TransactionController = ()=>{
    const getAll = (req,res)=>{
        res.send({message:'Funciona'});
    }
    const getByUserId = (req,res)=>{
        res.send({data:req.params.id});
    }
    const post = (req,res)=>{ 
        
    };
    
    return {
       getAll,getByUserId,post
    };
}
module.exports = TransactionController();