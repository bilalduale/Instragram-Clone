import React, { Component } from 'react';
import Navbar from './Navbar';
import Stories from './Stories';
import Feed from './Feed';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Stories />
        <Feed />
      </div>
    );
  }
}

export default App;
