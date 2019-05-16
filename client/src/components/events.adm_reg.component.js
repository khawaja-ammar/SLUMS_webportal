import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'

const axios = require('axios')

export default class adm_reg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ev_name: '',
            sp_name: '',
            sp_cat: '',
            teams: ['']

        }
    }

    handleChange = (e) => {
        if (e.target.name === 'teams') {
            this.state.teams[e.target.id] = e.target.value
            this.forceUpdate()

        } else {
            this.setState({[e.target.id]: e.target.value})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let sid = 0

        axios.get('/api/events' + '/' + this.state.ev_name).then((res)=> {
            console.log('Event Found')
            console.log(this.state)
            let temp = res.data
            let j
            let check = 0

            for (j=0; j<temp.sports.length; j++) {

                if (temp.sports[j].name === this.state.sp_name && temp.sports[j].category == this.state.sp_cat) {
                    check = 1
                    break
                }
            }
            if (check === 0) {
                console.log('Cat not found')
            }
            sid = temp.sports[j]._id
            for (let i=0; i<this.state.teams.length; i++) {

                axios.post('/api/teams', {params: {
                    name: this.state.ev_name,
                    eventName: this.state.teams[i],
                    sportsID: sid
                }}).then((res)=> {
                    console.log('yes')
                }).catch((err)=> {
                    console.log('no')
                })

            }

        }).catch((err) => {
            console.log(err)
        })

        


    }

    addTeam = (e) => {
        if (e.target.value === '+') {
            this.state.teams.push('')
            this.forceUpdate()
        } else {
            if (this.state.teams.length !== 1) {
                this.state.teams.pop()
                this.forceUpdate()
            }
        }
    }

    render() {
        return (
            <Container textAlign='center'>
                <Row>
                    <Col>
                        <form>
                            <span style={{width: '120px', display:'inline-block'}}>Event Name: </span>
                            <input type='text' id='ev_name' value={this.state.ev_name} onChange={this.handleChange}/><br/>

                            <span style={{width: '120px', display:'inline-block'}}>Sport Name: </span>
                            <input type='text' id='sp_name' value={this.state.sp_name} onChange={this.handleChange}/><br/>

                            <span style={{width: '120px', display:'inline-block'}}>Sport Category: </span>
                            <input type='text' id='sp_cat' value={this.state.sp_cat} onChange={this.handleChange}/><br/>

                            <br/>
                            <br/>




                            <br/>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </form>
                    </Col>
                    <Col>
                        <span style={{width: '120px', display:'inline-block'}}>Add Team(s): </span>
                        {this.state.teams.map((elem, ind)=>{
                            if (this.state.teams.length === ind+1) {
                                return(
                                    <div>
                                        <input type='text' id={ind} name='teams' value={elem} onChange={this.handleChange}/><br/>
                                        <input type='button' style={{width: '25px'}} value='+' onClick={this.addTeam}/>
                                        <input type='button' style={{width: '25px'}} value='-' onClick={this.addTeam}/>
                                    </div>
                                )
                            } else {
                                return(
                                    <div>
                                        <input type='text' id={ind} name='teams' value={elem} onChange={this.handleChange}/><br/>
                                    </div>
                                )
                            }
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}