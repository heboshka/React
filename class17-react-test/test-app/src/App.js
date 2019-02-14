import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Employees from './components/employees'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Error from './components/Error'

class App extends Component {


  render() {

    return (

      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/employees" component={Employees} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>




    );
  }
}

export default App;
