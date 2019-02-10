import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Employees from './components/employees'


class App extends Component {
  state = {
    page: false
  }
  chooseEmp = () => {
    this.setState({ page: true })
  }
  chooseMain = () => {
    this.setState({ page: false })
  }

  render() {
    const pageChoosen = this.state.page;
    return (

      <div className="app">
        <header >
          <h2 onClick={this.chooseMain} > Home </h2>
          <h2 onClick={this.chooseEmp}> Employees</h2>
        </header>

        {pageChoosen ?
          <Employees /> : <Main />

        }

      </div>
    );
  }
}

export default App;
