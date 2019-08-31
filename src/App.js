import React, {Component} from 'react';
import Navbar from './Component/Navbar/Navbar';
import Homepage from './Component/Home/home';

import './App.css';

class App extends Component {


  
  render (){

    return (
      <div className="App">
        <Navbar  />
        <Homepage />
        
      </div>
    );
  }
}

export default App;
