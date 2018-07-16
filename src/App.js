import ReactGA from 'react-ga';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    ReactGA.initialize('UA-122417377-1');
    ReactGA.pageview(window.location.pathname);

    handleClick(){
      ReactGA.event({
      category: 'Submit',
      action: 'Clicked button',
    });
    }
  }
  render() {
    return (
      <div className="App">
        <p className="message">
          Google Analytics
        </p>
        <button type="button" onClick={() =>{this.handleClick()}}>Click me!</button>
      </div>
    );
  }
}

export default App;
