import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import view_Events from './events.view.component';

import pla_view_scores from './events.pla_scores.component';
import pla_view_upcoming from './events.pla_upcoming.component';
import pla_reg from './events.pla_reg.component';

import adm_create_ev from './events.adm_create_ev.component';
import adm_upd_ev from './events.adm_upd_ev.component';
import adm_upd_sco from './events.adm_upd_sco.component';
import adm_reg from './events.adm_reg.component';



export default class events extends Component {
    constructor (props) {
        super(props)
        this.state = {
            logged_in: this.props.location.state.login_status 
        }
        //VERIFY STATUS
    }

    render() {
        if (this.state.logged_in === 'Login') 
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
                            <Route path='/events/view' component={view_Events}/>
                            <Route path='/events/scores' component={pla_view_scores}/>
                            <Route path='/events/upcoming' component={pla_view_upcoming}/>
                            <Route path='/events/register' component={pla_reg}/>
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
                                    <li className='navbar-item'><Link to='/events/create_event' className='nav-link'>Create Event</Link></li>
                                    <li className='navbar-item'><Link to='/events/modify_event' className='nav-link'>Modify/Delete Event</Link></li>
                                    <li className='navbar-item'><Link to='/events/update_scores' className='nav-link'>Update Match Score</Link></li>
                                    <li className='navbar-item'><Link to='/events/register_teams' className='nav-link'>Register Teams</Link></li>
                                </ul>
                                {/* </div> */}
                            </nav> 
                        </div>
                        <div stlye={{float:'left', width:'80%'}}><br/>
                            <Route path='/events/view' component={view_Events}/>
                            <Route path='/events/create_event' component={adm_create_ev}/>
                            <Route path='/events/modify_event' component={adm_upd_ev}/>
                            <Route path='/events/update_scores' component={adm_upd_sco}/>
                            <Route path='/events/register_teams' component={adm_reg}/>
                        </div>
                    </div>
                </Router>
            )
        }
    }
}