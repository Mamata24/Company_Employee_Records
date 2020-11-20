import React from "react"
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from "./Components/pages/Home"
import Register from './Components/Register'
import Login from './Components/Login'
import Employee from './Components/Employee'
function App() {
  return (
    <Router>
      <>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/employee' component={Employee}/>
      </Switch>
      </>
    </Router>
  );
}

export default App;
