import React, { Component } from 'react';
import './images/Företag-bild-front.jpg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  componentDidMount() {
    window.fetch('api/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <Navbar drawerClickHandler = {this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '3.5em'}}>
          <div className="App-header">
            <h2>Ska du fakturera utan företag som privatperson?</h2>
            <h4>Vad söker du efter?</h4>
            
          </div>
          <p className="App-intro">
            To get started, edit and save to reload.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
