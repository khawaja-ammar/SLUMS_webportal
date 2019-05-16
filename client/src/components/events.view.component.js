import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap'

const axios = require('axios')
const ip = '/api/events'

export default class view_events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            expandedEvents: [],
            expandedSports: [],
        }
        this.getData = this.getData.bind(this)
        this.getData()
    }
    getData () {
        axios.get(ip).then((res) => {
            console.log("RESPONSE")
            
            let temp = []
            for (var item in res.data) {
                temp.push({
                    name: res.data[item].name,
                    st_date: res.data[item].start_date,
                    en_date: res.data[item].end_date,
                    info: res.data[item].info,
                    sports: res.data[item].sports
                })
            }
            this.setState({events: temp})

        }).catch((err)=> {
            console.log("ERROR")
            console.log(err)
        })
    }

    expandedStateEvent = (event) => {
        let ind = this.state.expandedEvents.findIndex(
            (name) => {
                return name === event.name
            }
        )
        return ind > -1
    }

    expandedStateSport = (sport) => {
        let ind = this.state.expandedSports.findIndex(
            (name) => {
                    return name === sport._id
            }
        )
        return ind > -1
    }

    expandSport = (sport) => {
        let newRows = [...this.state.expandedSports]
        let ind = newRows.findIndex((id) => {
            return id === sport._id
        })

        if (ind > -1) {
            newRows.splice(ind, 1)
        }
        else {
            newRows.push(sport._id)
        }

        this.setState({
            expandedSports: [...newRows]
        })
    }

    expandEvent = (event) => {
        let newRows = [...this.state.expandedEvents]
        let ind = newRows.findIndex((id) => {
            return id === event.name
        })

        if (ind > -1) {
            newRows.splice(ind, 1)
        }
        else {
            newRows.push(event.name)
        }

        this.setState({
            expandedEvents: [...newRows]
        })
    }

    getMatchRows = (match, i) => {
        
        return (
            <tr>
                <td></td>
                <td></td>
                <td>{i}</td>
                <td>{match.team1ID}</td>
                <td>{match.team2ID}</td>
                <td>{match.winner}</td>
                <td>{match.score}</td>
                <td>{match.location}</td>
                <td>{(match.date).toString().substring(0, 10)}</td>
            </tr>
        )
    }

    getSportsRows = (sport) => {

        let rows = []
        
        const row = (
            <tr>
                <td></td>
                <td>
                    <button onClick={()=>this.expandSport(sport)} style={{width: '25px'}}>
                        {this.expandedStateSport(sport) ? '-': '+'}
                    </button>
                </td>
                <td>{sport.name}</td>
                <td>{sport.category}</td>
            </tr>
        )

        rows.push(row)
        
        if (this.expandedStateSport(sport)) {
            if (sport.matches && sport.matches.length > 0) {
                let i = 0
                const match_row = sport.matches.map((match) => {
                    i += 1
                    return this.getMatchRows(match, i)
                })
    
                const detail_1 = (
                    <tr>
                        <td className='match_details' colSpan='100%'>
                            <Table striped bordered hover size='sm' className='tab-sports' >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>#</th>
                                        <th>Team 1 ID</th>
                                        <th>Team 2 ID</th>
                                        <th>Winner</th>
                                        <th>Score</th>
                                        <th>Location</th>
                                        <th>Date</th>
                                    </tr>
                                </thead> 
                                <tbody>
                                    {match_row}
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                )
                rows.push(detail_1);
            } else {
                rows.push(
                    <tr>
                        <td colSpan='5'>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>No Matches</th>
                        </td>
                    </tr>
                )
            }
        }
        return rows;
    }

    getEventRows = (event) => {

        let rows = []

        const row = (
            <tr>
                <td>
                    <button  onClick={()=>this.expandEvent(event)} style={{width: '25px'}}>
                        {this.expandedStateEvent(event) ? '-' : '+'}
                    </button>
                </td>
                <td>{event.name}</td>
                <td>{(event.st_date).toString().substring(0, 10)}</td>
                <td>{(event.en_date).toString().substring(0, 10)}</td>
                <td>{event.info}</td>

            </tr>
        )

        rows.push(row)

        if (this.expandedStateEvent(event)) {
            if (event.sports && event.sports.length > 0) {
                
                const sports_row = event.sports.map((sport) => {
                    return this.getSportsRows(sport)
                })
    
                const detail_1 = (
                    <tr>
                        <td className='sports_details' colSpan='6'>
                            <Table borderless size='sm' className='tab-sports' >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>{/* <span>Matches</span> */}</th>
                                        <th>Sports Name</th>
                                        <th>Sports Category</th>

                                    </tr>
                                </thead> 
                                <tbody>
                                    {sports_row}
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                )
                rows.push(detail_1);
            } else {
                rows.push(
                    <tr>
                        <td colSpan='5'>
                            <div>No Matches</div>
                        </td>
                    </tr>
                )
            }
        }
        return rows;
    }

    getTable = () => {

        const event_rows = this.state.events.map((event)=> {
            return this.getEventRows(event);
        })
        return (
            <Table className='tab' style={{width: '100%'}}>
                <thead> 
                    <tr>
                        <th>{/* <span>Sports</span> */}</th>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {event_rows}    
                </tbody>
            </Table>
        )
    }


    render() {
        if (this.state.events.length === 0) {
            return (
                <div style={{textAlign: 'center'}}>
                    Fetching
                </div>
            )
        } else {
            return (
                <div >
                    {this.getTable()}
                </div>
            )
        }
    }
}