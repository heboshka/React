import React from 'react';
import logo1 from '../logo1.png';

export default class Main extends React.Component {

  render() {


    return (
      <div className='main-page'>
        <h1>Welcome to the test!</h1>
        <img src={logo1} className="App-logo" alt="logo" />
      </div>
    )
  }
}