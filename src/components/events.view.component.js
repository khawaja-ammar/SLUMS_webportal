import React, { Component } from 'react';
const axios = require('axios')

const ip = 'http://localhost:5000/api/events'


export default class view_events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resp: ''
        }
        this.getData = this.getData.bind(this)
    }

    getData () {
        axios.get(ip).then((res) => {
            console.log("RESPONSE")
            this.setState({resp: res})
        }).catch((err)=> {
            console.log("Error")

            console.log(err.response)
        })
    }
    render() {
        return (
            <div>
                <button  onClick={this.getData}>CLICK</button><br/>
                <div>
                    {this.state.resp}
                </div>

            </div>
            
        )
    }
}