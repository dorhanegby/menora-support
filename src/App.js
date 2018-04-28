import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link,  Route, Switch } from 'react-router-dom';
import Home from './Home.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
