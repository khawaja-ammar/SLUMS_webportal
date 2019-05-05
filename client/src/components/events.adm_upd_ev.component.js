import React, { Component } from 'react';
const axios = require('axios')

const ip = '/api/events'

export default class adm_upd_ev extends Component {
	constructor(props) {
        super(props)
        this.state = {
            search: ''            
        }
        this.handleChange = this.handleChange.bind(this)
        this.searcher = this.searcher.bind(this)
    }

    handleChange (e) {
        this.setState({[e.target.id]: e.target.value});
        console.log(this.state)
    }

    searcher(e) {
        e.preventDefault()
  
        const param = {
            id: this.state.search
        }
        axios.get(ip, {params: param}).then((res) => {
            // console.log(param)
            console.log('Response')

            console.log(res)
            console.log(res.data)

        }).catch((err) => {
            console.log("error")
            console.log(err.response)

        })
    }


    
    render() {
        return (
            <div className='container' style={{textAlign: 'center',height:'100%', width:'100%', overflow:'hidden'}}>
                <form onSubmit={this.searcher}>
                    Enter Event Name to Modify/Delete: 
                    <input type='text' id='search' value={this.state.search} onChange={this.handleChange}/><br/>
                    <button>Search</button>

                </form>
            </div>
		 
        )
    }
}