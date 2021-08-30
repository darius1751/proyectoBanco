import React,{useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
const initialAccount = [];
const TransferirForm = ({user}) => {
    const [accounts, setAccounts] = useState(initialAccount);
        helpHttp().get(`http://localhost:4000/account/${user.id}`,{headers:{"content-type":"application/json"}}).then(value=>{
            setAccounts(value);
        });
    console.log(accounts);
    return (
        <div>
            <form style={{color:'red',backgroundColor:'black'}}>
                <select>
                    {(accounts.length <= 0)?<option>Sin Cuentas</option>:
                        accounts.map((value)=>{
                            return <option key={Date.now()+value.id} value={value.id}>{value.id} - {value.cash}</option>
                        })
                    }
                </select>
            </form>
        </div>
    );
}

export default TransferirForm;
