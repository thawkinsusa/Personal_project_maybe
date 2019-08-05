
import React, { Component } from 'react';
import './App.css';
import routes from "./routes"
import Nav from './components/Nav/Nav';
import Donate from './components/Donate/Donate'
import StripeCheckout from 'react-stripe-checkout'
// testing git
class App extends Component {
  constructor() {
    super()
    this.sate = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className='background-img'>
          <Nav />
          <div className='home-main content'>
          {/* <Donate></Donate> */}
          </div>
          {routes}
        </div>
      </div>

    );
  }
}

export default App;