import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Zip from './zipGet'
import ServerData from './serverData.js'
import CreateYard from './createYard'


class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <nav className="home-nav">
          <Link to="/serverdata" className="home-link"> ServerData </Link>
          <Link to="/createyard" className="create-link">Create</Link>
          <Link to="zip" className="zip-link"> Zipcode </Link>
        </nav>

        <div>
        <Route exact path="/serverdata" component={ServerData}/> 
        <Route exact path="/zip" component={Zip}/> 
        <Route exact path="/createyard" component={CreateYard}/> 
        </div>
      </Router>
      
    </div>
  );
}
}

export default App;
