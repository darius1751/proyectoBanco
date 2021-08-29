const AccountModel = require('../models/AccountModel');
const AccountController = ()=>{
    const getAll = (req,res)=>{
        res.send({message:'Funciona'});
    }
    const login = (req,res)=>{
        const {identification,password} = req.body;
        const user = new UserModel(identification,password);
        res.send(user);
    }
    const getId = (req,res)=>{
        res.send({data:req.params.id});
    }
    const post = (req,res)=>{

    };
    const del = (req,res)=>{

    }
    
    return {
       getAll,getId,post,del,login
    };
}
module.exports = AccountController();