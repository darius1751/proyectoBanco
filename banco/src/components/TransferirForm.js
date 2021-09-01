import React from 'react';
const TransferirForm = ({user}) => {
    console.log(user);
    const {accounts} = user;
    return (
        <div>
            <form>
                <select>
                    {accounts.lenght <= 0?<option>No tiene Cuentas</option>:accounts.map((account)=>
                        <option key={account.id+'Id'} value={account.id} >{account.id} - {account.cash}</option>
                    )}
                </select>
                <input type='number' placeholder='Ingrese la cantidad de dinero a transferir' min='1' step='0.01'/>
            </form>
        </div>
    );
}

export default TransferirForm;
