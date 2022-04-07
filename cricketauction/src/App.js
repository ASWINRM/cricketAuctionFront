import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './pages/Home/HomeScreen'

import { createBrowserHistory } from 'history'
let history = createBrowserHistory();
function App() {
  return (
    <div className="App">
        <Router history={history}>
         <Switch>
            <Route exact   path='/'      component={Login}></Route>
            <Route exact path='/allplayers' component={HomeScreen} ></Route>
       </Switch>
    </Router> 
    </div>
  );
}

export default App;
