import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import View_Events from './events.view.component';

import View_Scores from './events.0_scores.component';
// import Upcoming_events from './events.0_upcoming.scor';
// import Reg from './events.0_reg.scores';

// import Create_Events from './events.1_create.component';
// import Upd_Del_Events from './events.1_upd_ev.component';
// import Upd_Score from './events.1_upd_sco.component';
// import Reg_Team from './events.1_reg.component';



export default class events extends Component {
    constructor (props) {
        super(props)
        this.state = {
            logged_in: false 
        }
        //VERIFY STATUS
    }

    render() {
        if (!this.state.logged_in) 
        {
            return (
                <Router>
                    <div className='container' style={{height:'100%', width:'100%', overflow:'hidden'}}>
                        <div id='event-nav' style={{float:'left', width:'20%'}}>
                            <nav className='navbar navbar-expand-lg navbar-light'>
                                {/* <div className='collapse navbar-collapse'> */}
                                <ul className='navbar-nav nav-pills flex-column'>
                                    <li className='navbar-item'><Link to='/events/view' className='nav-link'>View All Events</Link></li>
                                    <li className='navbar-item'><Link to='/events/scores' className='nav-link'>View Scores</Link></li>
                                    <li className='navbar-item'><Link to='/events/upcoming' className='nav-link'>Upcoming Events</Link></li>
                                    <li className='navbar-item'><Link to='/events/register' className='nav-link'>Register for Event</Link></li>
                                </ul>
                                {/* </div> */}
                            </nav> 
                        </div>
                        <div stlye={{float:'left', width:'80%'}}><br/>
                            <Route path='/events/view' component={View_Events}/>
                            <Route path='/events/scores' component={View_Scores}/>
                            <Route path='/events/upcoming' component={View_Events}/>
                            <Route path='/events/register' component={View_Events}/>

    
                        </div>
                        
                        
                    </div>
                </Router>
            )
        } 
        else 
        {
            return (
                <Router>
                    <div className='container' style={{height:'100%', width:'100%', overflow:'hidden'}}>
                        <div id='event-nav' style={{float:'left', width:'20%'}}>
                            <nav className='navbar navbar-expand-lg navbar-light'>
                                {/* <div className='collapse navbar-collapse'> */}
                                <ul className='navbar-nav nav-pills flex-column'>
                                    <li className='navbar-item'><Link to='/events/view' className='nav-link'>View All Events</Link></li>
                                    <li className='navbar-item'><Link to='/events' className='nav-link'>Create Event</Link></li>
                                    <li className='navbar-item'><Link to='/sports' className='nav-link'>Modify/Delete Event</Link></li>
                                    <li className='navbar-item'><Link to='/matches' className='nav-link'>Update Match Score</Link></li>
                                    <li className='navbar-item'><Link to='/matches' className='nav-link'>Register Teams</Link></li>
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
}