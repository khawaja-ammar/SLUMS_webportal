import React, { Component } from 'react';
const axios = require('axios')
require('dotenv').config()


// let ip = '' 
// if (process.env.ip) {
//     ip = process.env.ip 
// } else {
//     ip = 'http://localhost:8080/api/events'
// }
const ip = '/api/events'


export default class adm_upd_ev extends Component {
	constructor(props) {
        super(props)
        this.state = {
            msg: '',
            ev_name: '',
            st_date: '',
            en_date: '',
            info: '',
            sports: [{
                name: '',
                category: ''
            }]
        }
        this.handleChange = this.handleChange.bind(this)
        this.fetchEvent = this.fetchEvent.bind(this)
        /*this.addSports = this.addSports.bind(this)*/
    }

    handleChange (e) {
        if (e.target.name === 'search') {
            this.state.ev_name = e.target.value
            this.forceUpdate()
        }
        
    }

    fetchEvent (e) {
        if (e.target.value === 'search') {
            this.state.ev_name = e.target.value
            this.forceUpdate()
        }
       /* let param = {
            name: this.state.ev_name,
            "start_date": '',
            "end_date": '',
            "info": '',
            "sports": ''
        }*/
        axios.get(ip).then((res) => {
        	console.log("RESPONSE")
             console.log(res.data)
            this.setState({msg: 'Success'})
            setTimeout(
                function() {
                    this.setState({msg: ''});
                }
                .bind(this),
                3000
            );

        })

        
    }
    
    render() {
        return (
            <div className="search-container">
		      <input type="text" placeholder="Search an event to modify/delete" value = {this.ev_name} name="search" onChange={this.handleChange}/>
		      <button type="submit" value = "Search" onClick={this.fetchEvent} ><i class="fa fa-search"></i></button>
			  </div>
		 
        )
    }
}