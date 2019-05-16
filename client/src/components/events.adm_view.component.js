import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap'

const axios = require('axios')
const ip = '/api/events'

export default class view_events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            expandedEvents: [],
            expandedSports: [],
            event_modal_show: false,
            event_modal_id: '',
            sport_modal_show: false,
            sport_modal_id: '',
            match_modal_show: false,
            match_modal_id: '',
            match: {
                team1ID: '',
                team2ID: '',
                winner: '',
                score: '',
                location: '',
                date: ''
            },
            check: 0,
            upd_ev: '',
            upd_sp: '',
            upd_mt: ''
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
            // this.forceUpdate()
            this.setState({events: temp,
                event_modal_show: false,
                sport_modal_show: false,
                match_modal_show: false})

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
        
        const match_modal_initial = (e) => {
            let obj = JSON.parse(e.target.id)
            obj.date = (obj.date).toString().substring(0, 10)

            this.setState({
                match_modal_id: JSON.stringify(obj),
                match_modal_show: true
            })
        }



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
                <td align='right'>
                    <Button style={{background:"#66B2FF"}}  id={JSON.stringify(match)} onClick={match_modal_initial}>Edit</Button>
                </td>
            </tr>
        )
    }

    getSportsRows = (sport, event_name) => {
        sport.ev_name = event_name
        const sport_modal_initial = (e) => {
            this.setState({
                sport_modal_id: e.target.id,
                sport_modal_show: true
            })
        }


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
                <td align='right'>
                    <Button style={{background: '#0066CC'}} id={JSON.stringify(sport)} onClick={sport_modal_initial}>Edit</Button>
                </td>
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
                                        <th align='right'></th>
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

        const event_modal_initial = (e) => {
            // console.log(e.target.id)
            let obj = JSON.parse(e.target.id)
            delete obj.sports
            obj.st_date = (obj.st_date).toString().substring(0, 10)
            obj.en_date = (obj.en_date).toString().substring(0, 10)

            this.setState({
                event_modal_id: JSON.stringify(obj),
                event_modal_show: true
            })
        }

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
                <td align='right'>
                    <Button style={{background: '#003366'}} id={JSON.stringify(event)} onClick={event_modal_initial}>Edit</Button>
                </td>
            </tr>
        )

        rows.push(row)

        if (this.expandedStateEvent(event)) {
            if (event.sports && event.sports.length > 0) {
                
                const sports_row = event.sports.map((sport) => {
                    return this.getSportsRows(sport, event.name)
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
                                        <th align='right'></th>

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
                        <th align='right'></th>
                    </tr>
                </thead>
                <tbody>
                    {event_rows}    
                </tbody>
            </Table>
        )
    }









    event_submit = (e) => {
        e.preventDefault()
        console.log('Event Change')
        let obj = JSON.parse(this.state.event_modal_id)
        
        console.log(obj)

        axios.put(ip + '/' + this.state.upd_ev, {params: {
            name: obj.name,
            st_date: new Date(obj.st_date),
            en_date: new Date(obj.en_date),
            info: obj.info
        }}).then((res) => {
            this.getData()
            console.log("MOD")
            console.log(res)
        }).catch((err) => {
            console.log("fail")
        })
        this.state.check = 0
    }

    event_handle_change = (e) => {
        let ev = JSON.parse(this.state.event_modal_id)
        ev[e.target.id] = e.target.value
        console.log(ev[e.target.id])
        this.setState({event_modal_id: JSON.stringify(ev)})
    }

    event_mod = () => {
        var str = this.state.event_modal_id
        if (str === '') {
            return(
                <div>
                    Nothingness
                </div>
            )
        } 
        else {
            var ev = JSON.parse(str)
            // console.log(ev)
            if (this.state.check === 0) {
                this.state.upd_ev = ev.name
                this.state.check = 1
            }
            
            return(
                <form>
                    <div align='center'>

                        <label>Event Name:</label><br/>
                        <input type='text' id='name' value={ev.name} onChange={this.event_handle_change}/><br/>
                        
                        <label>Starting Date:</label><br/>
                        <input type='date' id='st_date' value={ev.st_date} onChange={this.event_handle_change}/><br/>

                        <label>Ending Date:</label><br/>
                        <input type='date' id='en_date' value={ev.en_date} onChange={this.event_handle_change}/><br/>

                        <label>Description (Optional):</label><br/>
                        <textarea rows='5' id='info' value={ev.info} onChange={this.event_handle_change}/><br/>
                    </div>
                </form>
            )

        }
        

    }

    sport_submit = (e) => {
        e.preventDefault()
        console.log('Sport Change')
        let obj = JSON.parse(this.state.sport_modal_id)
        
        // console.log(obj)

        axios.put('/api/sports' + '/'+ obj.ev_name + '/' + this.state.upd_sp, {params: {
            name: obj.name,
            category: obj.category
        }}).then((res) => {
            this.getData()
            console.log("MOD")
            console.log(res)
        }).catch((err) => {
            console.log("fail")
            console.log(err.response)
        })
        this.state.check = 0
    }

    sport_handle_change = (e) => {
        let sp = JSON.parse(this.state.sport_modal_id)
        sp[e.target.id] = e.target.value
        console.log(sp[e.target.id])
        this.setState({sport_modal_id: JSON.stringify(sp)})        
    }

    sport_match_handle = (e) => {
        let temp = this.state.match
        temp[e.target.id] = e.target.value
        this.setState({
            match: temp
        })
    }

    addmatch = (e) => {
        e.preventDefault()
        console.log(this.state.match)
    }

    sport_mod = () => {
        var str = this.state.sport_modal_id
        if (str === '') {
            return(
                <div>
                    Nothingness
                </div>
            )
        } else {
            var sp = JSON.parse(str)
            if (this.state.check === 0) {
                this.state.upd_sp = sp._id
                this.state.check = 1
            }


            return(
                <form>
                    <div textAlign='center'>
                        <label>Sport Name:</label><br/>
                        <input type='text' id='name' value={sp.name} onChange={this.sport_handle_change}/><br/>

                        <label>Category:</label><br/>
                        <input type='text' id='category' value={sp.category} onChange={this.sport_handle_change}/><br/>
                    </div>
                </form>
            )
        } 
    }


    match_submit = (e) => {
        e.preventDefault()
        console.log('Sport Change')
        let obj = JSON.parse(this.state.match_modal_id)
        
        console.log(obj)

        // axios.put(ip, {params: {
        //     name: obj.name,
        //     st_date: new Date(obj.st_date),
        //     en_date: new Date(obj.en_date),
        //     info: obj.info
        // }}).then((res) => {
        //     console.log("MOD")
        // }).catch((err) => {
        //     console.log("fail")
        // })
        
    }

    match_handle_change = (e) => {
        let mt = JSON.parse(this.state.match_modal_id)
        mt[e.target.id] = e.target.value
        console.log(mt[e.target.id])
        this.setState({match_modal_id: JSON.stringify(mt)})        
    }

    match_mod = () => {
        const str = this.state.match_modal_id
        if (str === '') {
            return(
                <div>
                    Nothingness
                </div>
            )
        } else {
            var match = JSON.parse(str)
            // console.log(mt)
    
            return(
                <form>
                    <div align='center'>

                        <label>Team 1 ID:</label><br/>
                        <input type='text' id='team1ID' value={match.team1ID} onChange={this.match_handle_change}/><br/>

                        <label>Team 2 ID:</label><br/>
                        <input type='text' id='team2ID' value={match.team2ID} onChange={this.match_handle_change}/><br/>

                        <label>Winner:</label><br/>
                        <input type='text' id='winner' value={match.winner} onChange={this.match_handle_change}/><br/>

                        <label>Score:</label><br/>
                        <input type='text' id='score' value={match.score} onChange={this.match_handle_change}/><br/>

                        <label>Location:</label><br/>
                        <input type='text' id='location' value={match.location} onChange={this.match_handle_change}/><br/>

                        <label>Date:</label><br/>
                        <input type='text' id='date' value={match.date} onChange={this.match_handle_change}/><br/>

                    </div>
                </form>
            )

        }
    }

    render() {
        if (this.state.events.length === 0) {
            return (
                <div style={{textAlign: 'center'}}>
                    Fetching Admin
                </div>
            )
        } else {
            return (
                <div >
                    {this.getTable()}

                    <Modal show={this.state.event_modal_show} onHide={()=> this.setState({event_modal_show: false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="modal_events">
                                Modifying Event
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.event_mod()}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.event_submit}>Submit</Button>
                        </Modal.Footer>
                    </Modal>


                    <Modal show={this.state.sport_modal_show} onHide={()=> this.setState({sport_modal_show: false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="modal_sports">
                                Modifying: Sport
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.sport_mod()}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.sport_submit}>Submit</Button>
                        </Modal.Footer>
                    </Modal>


                    <Modal show={this.state.match_modal_show} onHide={()=> this.setState({match_modal_show: false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="modal_matches">
                                Modifying: Match
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.match_mod()}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.match_submit}>Submit</Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            )
        }
    }
}