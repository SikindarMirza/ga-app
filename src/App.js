import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    ReactGA.initialize('UA-122417377-1');
    ReactGA.pageview(window.location.pathname);
  }

  handleClick() {
    ReactGA.event({
    category: 'Submit',
    action: 'submit'
    });
  }

  handleCancel() {
    ReactGA.event({
    category: 'Cancel',
    action: 'cancel'
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="message">
          Google Analytics
        </p>
        <button type="button" onClick={this.handleClick()}>Click me!</button>
        <button type="button" className="cancel-button" onClick={this.handleCancel()}>Cancel!</button>
      </div>
    );
  }
}

export default App;
