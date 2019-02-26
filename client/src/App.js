import React, { Component } from 'react';
import logo from './images/Företag-bild-front.jpg';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  componentDidMount() {
    window.fetch('api/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Button variant="primary" size="sm">
            Small button
          </Button>
        </div>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
