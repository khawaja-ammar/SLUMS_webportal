import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import './App.css';

import home from './components/home.component';
import events from './components/events.component';
import sports from './components/sports.component';
import matches from './components/matches.component';
import aboutus from './components/aboutus.component';
import Login from './components/login.component';

import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.login_button = this.login_button.bind(this)
    this.state = {
      login_status: 'Login',
      username: ''
    }
  }

  login_button(value, username) {
    if (value === 'Login') {
      this.setState({
        login_status: value,
        username: ''
      })
    } else if (value === 'Logout') {
      this.setState({
        login_status: value,
        username: 'Logged in as '+username
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="container">

          <Navbar fixed='top' id='main_nav' expand='lg'>
            <Navbar.Brand>
              <img src={logo} width='60px' height='87px' alt=''/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>

              <Nav fill className='mr-auto'>
                <Nav.Item><Link to='/' className='nav-link'>Home</Link></Nav.Item>
                <Nav.Item><Link to={{pathname:'/events', state: {login_status: this.state.login_status}}} className='nav-link'>Events</Link></Nav.Item>
                <Nav.Item><Link to='/sports' className='nav-link'>Sports</Link></Nav.Item>
                <Nav.Item><Link to='/matches' className='nav-link'>Matches</Link></Nav.Item>
                <Nav.Item><Link to='/aboutus' className='nav-link'>About Us</Link></Nav.Item>
              </Nav>
              
              <Nav fill className='navbar-right'>
                <Nav.Item><Navbar.Brand>{this.state.username}</Navbar.Brand></Nav.Item>
                <Nav.Item className='active'><Link to={{pathname:'/login', state: {login_status: this.state.login_status}}} className='nav-link'>{this.state.login_status}</Link></Nav.Item>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>

          <div id='main_page'>
            <Route path='/' exact component={home}/>
            <Route path='/events' component={events}/>
            <Route path='/sports' component={sports}/>
            <Route path='/matches' component={matches}/>
            <Route path='/aboutus' component={aboutus}/>
            <Route path='/login' render={(props) => <Login {...props} login_button={this.login_button}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
