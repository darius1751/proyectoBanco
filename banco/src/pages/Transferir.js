import React from 'react';
import Nav from '../components/Nav';
import TransferirForm from '../components/TransferirForm';
const Transferir = ({setUser,user}) => {
    return (
        <div>
            <TransferirForm user={user}/>
        </div>
    );
}

export default Transferir;
