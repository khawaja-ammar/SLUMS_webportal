import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Popup from "reactjs-popup";
import './App.css';

import logo from './logo.png';

import home from './components/home.component';
import events from './components/events.component';
import sports from './components/sports.component';
import matches from './components/matches.component';
import aboutus from './components/aboutus.component';
import Login from './components/login.component';


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

  // login_button(e) {
  //   if (this.state.login_status === 'Login') {
  //     this.setState({login_status: 'Logout'})
  //   } else {
  //     this.setState({login_status: 'Login'})
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="container">

          <nav id='main_nav' className='navbar navbar-expand-lg navbar-light' >
            <a className='navbar-brand'>
              <img src={logo} width='80' height='116' alt=''/>
            </a>
            {/* <div className='collapse navbar-collapse'> */}
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'><Link to='/' className='nav-link'>Home</Link></li>
                {/* <li className='navbar-item'><Link to='/events' className='nav-link'>Events</Link></li> */}
                <li className='navbar-item'>
                  <Link to={{pathname:'/events', state: {login_status: this.state.login_status}}} className='nav-link'>Events</Link>
                </li>
                <li className='navbar-item'><Link to='/sports' className='nav-link'>Sports</Link></li>
                <li className='navbar-item'><Link to='/matches' className='nav-link'>Matches</Link></li>
                <li className='navbar-item'><Link to='/aboutus' className='nav-link'>About Us</Link></li>
              </ul>

              <ul className='navbar-nav navbar-right'>
                <li>
                  <label className='navbar-brand'>{this.state.username}</label>
                </li>
                <li className='navbar-item active'>
                  <Link to={{pathname:'/login', state: {login_status: this.state.login_status}}} className='nav-link'>{this.state.login_status}</Link>
                </li>
              </ul>
            {/* </div> */}
          </nav>

          {/* <label>HIIII</label> */}



          <Route path='/' exact component={home}/>
          <Route path='/events' component={events}/>
          <Route path='/sports' component={sports}/>
          <Route path='/matches' component={matches}/>
          <Route path='/aboutus' component={aboutus}/>
          <Route path='/login' render={(props) => <Login {...props} login_button={this.login_button}/>}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
