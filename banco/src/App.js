import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import User from './pages/User';
import Error404 from './pages/Error404';
import Loader from './components/Loader';
function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <HashRouter>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/Login'/>
            </Route>
            <Route path='/Login' exact> 
              <Login setUser = {setUser} user={user}/>
            </Route>
            <Route path='/user/:name'> 
              {user?<User user={user} setUser ={setUser}/>:<Redirect to='/Login'/>}
            </Route>
            <Route path='*' component={Error404}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
