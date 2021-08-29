const UserModel = require('../models/UserModel.js');
const conexion = require('../db/conexion');
const UserController = ()=>{
    const getAll = async (req,res)=>{
        const connection = await conexion();
        //res.send(await connection.query(''));
        
    }
    const login = async (req,res)=>{
        const {identification,password} = req.body;
        const user = new UserModel(identification,password);
        res.send(user);
    }
    const getId = async (req,res)=>{
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
module.exports = UserController();