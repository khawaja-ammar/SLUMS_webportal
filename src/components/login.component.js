import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import home from './components/home.component';


export default class login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            login_status: '',
            login_state_func: props.login_button,
            username: '',
            password: '',
            login_msg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
        this.setState({login_status: this.props.location.state.login_status});
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
            if(this.state.username === 'admin' && this.state.password === '123') {
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
            }
        } else if (e.target.id === 'logout') {
            this.state.login_state_func('Login', '');
            this.setState({
                password: '',
                username: '',
                login_status: 'Login'
            })
        }

    }

    render() {
        if (this.state.login_status === 'Login') {
            return (
                <div className="Login" style={{textAlign: 'center'}}>
                    <form id='login' onSubmit={this.handleSubmit}>
                        <label style={{width: '500px', height: '9px'}}>{this.state.login_msg}</label><br/>
                        <label>Username:</label><br/>
                        <input type='text' id='username' value={this.state.username} onChange={this.handleChange}/><br/>
                        <label>Password:</label><br/>
                        <input type='password' id='password' value={this.state.password} onChange={this.handleChange}/><br/><br/>
                        <button>Log In</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="Logout" style={{textAlign: 'center'}}>
                    <form id='logout' onSubmit={this.handleSubmit}>
                        <label style={{width: '500px', height: '9px'}}></label><br/>
                        <label>Are you sure you want to logout?</label><br/>
                        <input type='submit' value='Log Out' />
                    </form>
                </div>
            )
        }
    }
}