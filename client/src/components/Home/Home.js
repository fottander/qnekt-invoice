import React from 'react';
import './pexels-photo-251225.jpg';
import App from '../App/App';
import About from '../About/About';

import './Home.css';

const home = () => (
  <div>
    <App />
    <div className="App-header">
      <h2>Ska du fakturera utan företag som privatperson?</h2>
      <h4>Vad söker du efter?</h4>
      <button onClick={About}>Activate Lasers</button>
    </div>
  </div>
)

export default home
