import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <iframe src="https://www.menoramivt.co.il/wps/portal/customer-services/answers/?utm_source=menora&utm_medium=customer-services-lobby&utm_campaign=customer-services-lobby-faq" width="100%" style={{height: '1500px'}}></iframe>
      </div>
    );
  }
}

export default App;
