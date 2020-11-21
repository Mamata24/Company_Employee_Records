import React from "react"
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Register from './Components/Register'
import Login from './Components/Login'
import Home from '../src/Components/pages/Home'
import Employee from "./Components/Employee";
function App() {
  return (
    <Router>
      <>
      <Navbar />
      <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/employee' component={Employee}/>
      </Switch>
      </>
    </Router>
  );
}

export default App;
