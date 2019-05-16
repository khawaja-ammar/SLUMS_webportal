import React, { Component } from 'react';
const axios = require('axios')

const ip = '/api/events'

export default class adm_create_ev extends Component {
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addSports = this.addSports.bind(this)
    }

    handleChange (e) {
        if (e.target.name === 'sports_name') {
            this.state.sports[e.target.id]['name'] = e.target.value
            this.forceUpdate()
        } else if (e.target.name === 'sports_cat') {
            this.state.sports[e.target.id]['category'] = e.target.value
            this.forceUpdate()
        } else {
            this.setState({[e.target.id]: e.target.value});
        }
    }

    handleSubmit (e) {
        e.preventDefault()
        // console.log(this.state)

        let param = {
            name: this.state.ev_name,
            "start_date": new Date(this.state.st_date),
            "end_date": new Date(this.state.en_date),
            "info": this.state.info,
            "sports": this.state.sports
        }

        // console.log(param)


        axios.post(ip, {params: param}).then((res)=> {
            console.log("RESPONSE")
            // console.log(res)
            this.setState({msg: 'Success'})
            setTimeout(
                function() {
                    this.setState({msg: ''});
                }
                .bind(this),
                3000
            );
            this.setState({
                ev_name: '',
                st_date: '',
                en_date: '',
                info: '',
                sports: [{
                    name: '',
                    category: ''
                }]



            })
        }).catch((err)=> {
            console.log("ERROR")
            console.log(err.response)

            this.setState({msg: `Error: ${err.response}`})



        
        })
    }

    addSports (e) {
        e.preventDefault()
        if (e.target.value === '+')
        {
            this.setState({
                sports: [...this.state.sports, {name: '', category: ''}]
            })
        } else {
            let index = this.state.sports.length - 1
            if (index !== 0) {
                this.setState({
                    sports: this.state.sports.filter((_, i) => i !== index)
                })
            }
        }
    }




    render() {
        return (
            <div className='container' style={{textAlign: 'center'}}>
                <form id='create' onSubmit={this.handleSubmit}>
                    <div style={{float:'left', width:'40%'}}>
                        <label style={{width: '500px', height: '9px', display: 'block'}}></label><br/>
                        
                        <label>Event Name:</label><br/>
                        <input type='text' id='ev_name' value={this.state.ev_name} onChange={this.handleChange}/><br/>
                        
                        <label>Starting Date:</label><br/>
                        <input type='date' id='st_date' value={this.state.st_date} onChange={this.handleChange}/><br/>

                        <label>Ending Date:</label><br/>
                        <input type='date' id='en_date' value={this.state.en_date} onChange={this.handleChange}/><br/>

                        <label>Description (Optional):</label><br/>
                        <textarea rows='5' id='info' value={this.state.info} onChange={this.handleChange}/><br/>                    
                        
                        <br/>
                    </div>

                    <div style={{float:'left', width:'10%'}}>
                        <label style={{display: 'block'}}>{this.state.msg}</label><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <button>Create</button>
                    </div>
                    <div style={{float:'left', width:'50%'}}>
                        <label style={{width: '500px', height: '9px', display: 'block'}}></label><br/>

                        <label>Sport(s):</label><br/>
                        {this.state.sports.map((elem, ind) => {
                            if (this.state.sports.length === ind+1) {
                                return (
                                    <div>
                                        <input type='text' id={ind} name='sports_name' value={elem.name} onChange={this.handleChange} placeholder='Name'/><br/>
                                        <input type='text' id={ind} name='sports_cat' value={elem.category} onChange={this.handleChange} placeholder='Category'/><br/>
                                        <input type='button' style={{width: '25px'}} value='+' onClick={this.addSports}/>
                                        <input type='button' style={{width: '25px'}} value='-' onClick={this.addSports}/>
                                    </div>
                                )                               
                            } else {
                                return (
                                    <div>
                                        <input type='text' id={ind} name='sports_name' value={elem.name} onChange={this.handleChange} placeholder='Name'/><br/>
                                        <input type='text' id={ind} name='sports_cat' value={elem.category} onChange={this.handleChange} placeholder='Category'/><br/>
                                        <br/>
                                    </div>
                                )
                            }   
                        })}
                    </div>
                </form>
            </div>
        )
    }
}