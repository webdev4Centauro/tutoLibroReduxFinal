import React, { Component } from 'react';
import Sidebar from './Components/Sidebar.js'
import Main  from './Components/Main.js'
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
