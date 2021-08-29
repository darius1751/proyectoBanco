import React,{useState,useEffect} from 'react';
import {Input} from '@material-ui/core';
import { helpHttp } from '../helpers/helpHttp';
import { useHistory } from 'react-router-dom';
const initialData = {
    identification:'',
    password:''
}

const Login = ({setUser,user})=>{
    const [data,setData] = useState(initialData);
    const [loading,setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if(user)
            history.push(`/user/${user.name}`);
        return () => {
            
        };
    }, [user,history]);
    const handleChange = (e)=>{
        if(e.target.name === 'password'){
            
        }
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }
    const login = (e)=>{
        e.preventDefault();
        helpHttp().post('http://localhost:4000/user/login',{body:data,headers:{"content-type":"application/json"}})
        .then(value=>{
            if(value.id)
                setUser(value);
        });
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <form  noValidate autoComplete="off" onSubmit={login}>
                <Input placeholder='Ingrese su numero de identificacion' inputProps={{ 'aria-label': 'identification' }} type='number' value={data.identification} onChange={handleChange} name='identification'/>
                <br/>
                <Input placeholder='Ingrese su contraseña' inputProps={{ 'aria-label': 'password' }} type='password' value={data.password} onChange={handleChange} name='password'/>
                <br/>
                <Input type='submit' color='primary' style={{background:'red',marginTop:'2rem'}}>Iniciar Session</Input>
            </form>
        </div>
    );
}
export default Login;   