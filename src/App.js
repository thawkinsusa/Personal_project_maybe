    
import React, { Component } from 'react';
import './App.css';
import routes from "./routes"
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
// testing git
class App extends Component {
  constructor(){
    super()
    this.sate ={

    }
  }
  
  render() {
    return (
      <div className="App">
        <div className='background-img'>
       <Nav/>
       {routes}
       </div>
      </div>
      
    );
  }
}

export default App;