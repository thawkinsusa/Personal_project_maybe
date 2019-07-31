
import React, { Component } from 'react';
import './App.css';
import routes from "./routes"
import Nav from './components/Nav/Nav';
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

          </div>
          {routes}
        </div>
      </div>

    );
  }
}

export default App;