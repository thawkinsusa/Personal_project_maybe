    
import React, { Component } from 'react';
import './App.css';
import Routes from "./routes"
import Home from './components/Home/Home';

class App extends Component {
  constructor(){
    super()
    this.sate ={

    }
  }
  
  render() {
    return (
      <div className="App">
       <Home/>
      </div>
    );
  }
}

export default App;