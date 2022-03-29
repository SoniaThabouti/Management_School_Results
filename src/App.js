import { Button, } from 'react-bootstrap';


import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Login from './pages/admin';
import LoginProf from './pages/user';
import Home from './pages/home'
import Students from './pages/students'
import Prof from './pages/prof'
import Logged  from './pages/admin-logged';
import Student from './pages/student';
function App() {
  

  return (

    <Router>
      <Switch>
        <Route  exact path='/' >
         <Home/>
        </Route>
       
      <Route path='/admin' >
         <Login/>
      </Route>
      
      <Route path='/user' >
         <LoginProf/>
      </Route>
     
      <Route path='/student' >
         <Student/>
      </Route>




      <Route path='/students' >
         <Students/>
      </Route>

      <Route path='/prof'>
        <Prof/>
      </Route>

      <Route path='/admin-logged'>
        <Logged/>
      </Route>


      </Switch>

    </Router>
  );
}

export default App;
