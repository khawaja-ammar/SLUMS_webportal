import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import View_Events from './events.view.component';

export default class events extends Component {
    render() {
        return (
            <Router>
                <div className='container' style={{height:'100%', width:'100%', overflow:'hidden'}}>
                    <div id='event-nav' style={{float:'left', width:'20%'}}>
                        <nav className='navbar navbar-expand-lg navbar-light'>
                            {/* <div className='collapse navbar-collapse'> */}
                            <ul className='navbar-nav nav-pills flex-column'>
                                <li className='navbar-item'><Link to='/events/view' className='nav-link'>View Events</Link></li>
                                <li className='navbar-item'><Link to='/events' className='nav-link'>Events</Link></li>
                                <li className='navbar-item'><Link to='/sports' className='nav-link'>Sports</Link></li>
                                <li className='navbar-item'><Link to='/matches' className='nav-link'>Matches</Link></li>
                                <li className='navbar-item'><Link to='/aboutus' className='nav-link'>About Us</Link></li>
                            </ul>
                            {/* </div> */}
                        </nav> 
                    </div>
                    <div stlye={{float:'left', width:'80%'}}><br/>
                        <Route path='/events/view' component={View_Events}/>

                    </div>
                    
                    
                </div>
            </Router>

        )
    }
}