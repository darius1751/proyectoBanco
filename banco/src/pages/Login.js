import React,{useState} from 'react';
import {Button,Input} from '@material-ui/core';
const initialData = {
    user:'',
    password:''
}

const Login = ()=>{
    const [data,setData] = useState(initialData);
    const handleChange = (e)=>{
        if(e.target.name === 'password'){
            console.log(e.nativeEvent.data);
        }
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }
    const login = (e)=>{
        e.preventDefault();
    }
    return (
        <div >
            <form  noValidate autoComplete="off" onSubmit={login}  className='form'>
                <Input placeholder='Ingrese su numero de identificacion' inputProps={{ 'aria-label': 'description' }} type='number' value={data.user} onChange={handleChange} name='user'/>
                <br/>
                <Input placeholder='Ingrese su contraseña' inputProps={{ 'aria-label': 'description' }} type='password' value={data.password} onChange={handleChange} name='password'/>
                <br/>
                <Button variant="contained" color="primary">
                    Inicio de session
                </Button>
            </form>
        </div>
    );
}
export default Login;   