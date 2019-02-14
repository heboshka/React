import React from 'react';
import logo1 from '../logo1.png';

export default class Error extends React.Component {

  render() {


    return (
      <div className='main-page'>
        <h1>Sorry Wrong URL</h1>
        <img src={logo1} className="App-logo" alt="logo" />
      </div>
    )
  }
}