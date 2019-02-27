import React from 'react';
import './pexels-photo-251225.jpg';
import frilansFinans from './frilans-finans.jpeg';
import coolCompany from './cool-company.png';
import ukkoImage from './ukko.png';
import firmifyImage from './firmify.png';
import App from '../App/App';
import Footer from '../Footer/Footer';
import './Home.css';

const home = () => (
  <div>
    <App />
    <div className="App-header">
      <h1>Ska du fakturera utan företag som privatperson?</h1>
      <h4>Vad söker du efter?</h4>
      <div className="Button-row">
        <a id="button-1" href="#section1">Jämför tjänster</a>
        <div className="Button-divider" />
        <a id="button-2" href="#section2">Hur fungerar det</a>
      </div>
    </div>
    <div id="section1" />
    <div className="Content-divider">
      <div className="Compare">
        <h2>Jämför de olika företagen där du kan fakturera utan företag</h2>
        <div className="Table-holder">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Företag</th>
                <th scope="col">Avgift</th>
                <th scope="col">Min. belopp</th>
                <th scope="col">Utbetalt av 10.000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-1">Frilans Finans</a></th>
                <td>Markster</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-2">Cool Company</a></th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-3">Ukko</a></th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-4">Firmify</a></th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="Content-divider-2">
      <div id="comp-1" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <div><h3>Frilans finans</h3></div>
          <div className="comp-spacer" />
          <div><img src={frilansFinans} alt="Frilans-Frilans"/></div>
        </div>
        <p>Frilans finans var först på den svenska marknaden.</p>
      </div>
      <div id="comp-2" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <div><h3>Cool company</h3></div>
          <div className="comp-spacer" />
          <div><img src={coolCompany} alt="Cool-Company"/></div>
        </div>
        <p>Cool Company var två på den svenska marknaden.</p>
      </div>
      <div id="comp-3" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <div><h3>Ukko</h3></div>
          <div className="comp-spacer" />
          <div><img src={ukkoImage} alt="Ukko"/></div>
        </div>
        <p>Ukko är den finska versionen av våra svenska tjänster. De har också en stor del av verksamheten i de andra nrodiska länderna.</p>
      </div>
      <div id="comp-4" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <div><h3>Firmify</h3></div>
          <div className="comp-spacer" />
          <div><img src={firmifyImage} alt="Firmify"/></div>
        </div>
        <p>Firmify är en värdig uppstickare till de större aktörerna på svenska marknaden.</p>
      </div>
    </div>
    <div id="section2" />
    <div className="Content-divider-3">
      <div className="Readmore">
        <h3>Hur fungerar det när man fakturerar utan företag?</h3>
      </div>
    </div>
    <Footer />
  </div>
)

export default home
