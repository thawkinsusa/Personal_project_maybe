    
import React, { Component } from 'react';
import './App.css';
import Routes from "./routes"
import Nav from './components/Nav/Nav'

class App extends Component {
  constructor(){
    super()
    this.sate ={

    }
  }
  
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;