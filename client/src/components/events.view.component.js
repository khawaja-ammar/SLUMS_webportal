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

export default class view_events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            expandedEvents: [],
            expandedSports: {}
        }
        this.getData = this.getData.bind(this)
        this.getData()
    }
    getData () {
        console.log(process.env.IP)
        axios.get(ip).then((res) => {
            console.log("RESPONSE")
            
            for (var item in res.data) {
                this.state.events.push({
                    name: res.data[item].name,
                    st_date: res.data[item].start_date,
                    en_date: res.data[item].end_date,
                    info: res.data[item].info,
                    sports: res.data[item].sports
                })
            }
            this.forceUpdate()

        }).catch((err)=> {
            console.log("Error")
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

    // expandedStateSport = (event, sport) => {

    //     if (event in this.state.expandedSports) {
            

    //         let ind = this.state.expandedSports[event].findIndex(
    //             (name) => {
    //                 return name === sport
    //             }
    //         )
    //         // if (sport in this.state.expandedSports[event]){
    //         // console.log('true2')

    //         //     return 1
    //         // }
    //         console.log(ind > -1)

    //         return ind > -1

    //     }
    //     console.log(0)
    //     return 0


    //     // console.log(event)
    //     // let j = -1
    //     // let i = this.state.expandedSports.findIndex(
    //     //     (name) => {
    //     //         if (name === event) {
    //     //             j = this.state.expandSport[i].findIndex(
    //     //                 (spr) => {
    //     //                     return spr === sport
    //     //                 }
    //     //             )
    //     //         }
    //     //     }
    //     // )
    //     // if (i > -1 && j > -1){
    //     //     return 1
    //     // }
    //     // else {
    //     //     return 0
    //     // }
    // }

    // expandSport = (event, sport) => {
    //     // console.log(event)
    //     // console.log(sport)
    //     let newRows = this.state.expandedSports

    //     if (this.expandedStateSport(event, sport)) {
    //         console.log("ADDEDDDDDDDDDDDDDDDD")
    //         let index = this.state.expandedSports[event].findIndex((id) => {
    //             return id === sport
    //         })
    //         this.state.expandedSports[event].splice(index, 1)
    //     } else {
    //         if (event in this.state.expandedSports) {
    //             if (!(sport in this.state.expandedSports[event])) {
    //                 this.state.expandedSports[event].push(sport)
    //             }
    //         } else {
    //             this.state.expandedSports[event] = []
    //         }
    //     }



    //     // console.log(ind)

    //     // let ind2 = -1
    //     // if (ind > -1) {
    //     //     ind2 = newRows[event].findIndex((id) => {
    //     //         return id === sport
    //     //     })
    //     //     if (ind2 > -1) {
    //     //         newRows[event].splice(ind2,1)
    //     //     } else {
    //     //         newRows[event].push(sport)
    //     //     }
    //     // } else {
    //     //     newRows.push({
    //     //         event: []
    //     //     })
    //     // }



        


    //     // if (ind > - 1) {
    //     //     newRows.splice(ind, 1)
    //     // } else if (ind2 > -1) {
    //     //     newRows[ind].splice(ind2, 1)
    //     // } else {
    //     //     newRows[ind].push(sport.name)
    //     // }

    //     // this.setState({
    //     //     expandedSports: [...newRows]
    //     // })
    //     this.forceUpdate()
    //     console.log('this is the state')
    //     console.log(this.state.expandedSports)
    // }

    expandEvent = (event) => {

        // console.log("EXPAND")
        // console.log(event.name)

        let newRows = [...this.state.expandedEvents]
        let ind = newRows.findIndex((id) => {
            return id === event.name
        })

        // console.log(ind)

        if (ind > -1) {
            newRows.splice(ind, 1)
        }
        else {
            newRows.push(event.name)
        }

        this.setState({
            expandedEvents: [...newRows]
        })

        // console.log(this.state.expandedEvents)
    }

    getSportsRows = (event, sport) => {
        // console.log('yes')
        console.log(event)
        let rows = []
        
            {/* <tr onClick={()=>this.expandSport(event, sport.name)}> */}
        const row = (
            <tr>
                <td>
                    {/* <button>
                        {this.expandedStateSport(event, sport.name) ? '-': '+'}
                    </button> */}
                </td>
                <td>{sport.name}</td>
                <td>{sport.category}</td>
            </tr>
        )

        rows.push(row)
        
        // if (this.expandedStateSport(event, sport)) {

        // }



        return rows;
    }


    getEventRows = (event) => {
        let rows = []

        const row = (
            <tr onClick={()=>this.expandEvent(event)}>
                <td>
                    <button>
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
            const sports_row = event.sports.map((sport) => {
                return this.getSportsRows(event.name, sport)
            })

            const detail_1 = (
                <tr>
                    <td className='sports_details' colSpan='5'>
                        <br/>
                        <table className='tab-sports' style={{width: '100%'}}> 
                        <tr>
                            <th>
                                {/* <span>Sports</span> */}
                            </th>
                            <th>Sports Name</th>
                            <th>Sports Category</th>
                        </tr>
                        {sports_row}    
                        </table>



                        {/* {event.sports.map((sport, ind) => {

                            const sport_row =



                            return (
                                
                                
                            )

                            


                            
                        })} */}
                        <br/>
                    </td>
                </tr>
            )
            rows.push(detail_1);
        }
        return rows;
    }

    getTable = () => {

        const event_rows = this.state.events.map((event)=> {
            return this.getEventRows(event);
        })
        return (
            <table className='tab' style={{width: '100%'}}> 
                <tr>
                    <th>
                        {/* <span>Sports</span> */}
                    </th>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Info</th>
                </tr>
                {event_rows}    
            </table>
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