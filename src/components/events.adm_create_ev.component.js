import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import home from './components/home.component';
// import events from './components/events.component';
// import sports from './components/sports.component';
// import matches from './components/matches.component';
// import aboutus from './components/aboutus.component';


export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            eventname: '',
            startdate: '',
            enddate: '',
            info: '',
            sports: ''
        };
       /* this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }
  /*  componentDidMount () {
        if (typeof (this.props.location.state) === 'undefined') {
            alert('Please Use Navigation Bar Links to access this page for Security Reasons')
            this.props.history.push("/");
        } else {
            this.setState({login_status: this.props.location.state.login_status});
        }
    }

    handleChange (e) {
        this.setState({[e.target.id]: e.target.value});
    }


    handleSubmit (e) {
        e.preventDefault()
        this.setState({
            login_msg: ''
        })
        if (e.target.id === 'login') {
            console.log(this.state.username)
            console.log(this.state.password)

            
            let check = false
            /*
            VERIFY
            */
          /*  if(this.state.username === 'admin' && this.state.password === '123') {
                check = true
            } 

            if (!check) {
                this.setState({
                    login_msg: 'Invalid Username or Password, try again'
                })
            } else {
                this.state.login_state_func('Logout', this.state.username);
                this.setState({
                    password: '',
                    login_status: 'Logout'
                });
                this.props.history.push("/");
            }
        } else if (e.target.id === 'logout') {
            this.state.login_state_func('Login', '');
            this.setState({
                password: '',
                username: '',
                login_status: 'Login'
            })
            this.props.history.push("/");
        }

    } */
    render() {
            return (
                <div className="Create Event" style={{textAlign: 'center'}}>
                    <form id='login' /*onSubmit={this.handleSubmit}*/>
                        <label>Event Name:</label><br/>
                        <input type='text' id='username' value={this.state.eventname} /*onChange={this.handleChange}*//><br/>
                        <label>Start Date:</label><br/>
                        <input type='password' id='password' value={this.state.startdate} /*onChange={this.handleChange}*//><br/><br/>
                        <button>Create</button>
                    </form>
                </div>
            )
    }
}