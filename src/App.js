import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.png';

import home from './components/home.component';
import events from './components/events.component';
import sports from './components/sports.component';
import matches from './components/matches.component';
import aboutus from './components/aboutus.component';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor:'#FFFFFF'}} >
            <a className='navbar-brand'>
              <img src={logo} width='80' height='116' alt=''/>
            </a>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'><Link to='/' className='nav-link'>Home</Link></li>
                <li className='navbar-item'><Link to='/events' className='nav-link'>Events</Link></li>
                <li className='navbar-item'><Link to='/sports' className='nav-link'>Sports</Link></li>
                <li className='navbar-item'><Link to='/matches' className='nav-link'>Matches</Link></li>
                <li className='navbar-item'><Link to='/aboutus' className='nav-link'>About Us</Link></li>
              </ul>

              <ul className='navbar-nav navbar-right'>
                <li className='navbar-item'>
                  <Link to='/'>Login</Link>
                </li>
              </ul>
            </div>
          </nav>



          <Route path='/' exact component={home}/>
          <Route path='/events' exact component={events}/>
          <Route path='/sports' exact component={sports}/>
          <Route path='/matches' exact component={matches}/>
          <Route path='/aboutus' component={aboutus}/>
        </div>
      </Router>
    );
  }
}

export default App;
