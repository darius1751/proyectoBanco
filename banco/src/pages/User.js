import React from 'react';
import { useHistory, useParams} from 'react-router-dom';
import Nav from '../components/Nav';
const User = ({user,setUser}) => {
    const {name} = useParams();
    const history = useHistory();
    //const {path} = useRouteMatch();
    if(name !== user.name){
        history.push(`/user/${user.name}`);
    }
    return (
        <div>
            <Nav name={name} setUser={setUser}/>
        </div>
    );
}

export default User;
