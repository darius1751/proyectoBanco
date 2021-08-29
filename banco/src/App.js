import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <div className='login'>
      <HashRouter>
          <Switch>
            <Route component={Login} path='/Login'/>  
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
