import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Start from './Components/Start';
import Details from './Components/Details';

function App() {
  return (
    <React.Fragment>
       <Navbar></Navbar>
     <Switch>
      <Route  exact path="/" component={Start}/>
      <Route path="/details" component={Details}/>
     </Switch>
       
     </React.Fragment>
  );
}

export default App;
