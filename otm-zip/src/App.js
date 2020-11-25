import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Zip from './zipGet'
import Home from './home'
import CreateYard from './createYard'


class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" > Home </Link>
          <Link to="/createyard">Create</Link>
          <Link to="zip"> Zipcode </Link>
        </nav>

        <div>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/zip" component={Zip}/> 
        <Route exact path="/createyard" component={CreateYard}/> 
        </div>
      </Router>
      
    </div>
  );
}
}

export default App;
