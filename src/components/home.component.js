import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

let file = process.env.PUBLIC_URL+`./images.txt`

const properties = {
    duration: 3000,
    transitionDuration: 700,
    infinite: true,
    indicators: true,
    arrows: true
}


export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: []
        }
    }
    render() {
        if (this.state.img.length === 0) {
            fetch(file).then((r)=> r.text()).then(text => {
                this.setState({img: text.split('\n')})
            })
        }
        return (
            <div>
                <Slide {...properties}>
                    {this.state.img.map(function(i, ind) {
                        return (
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${i})`}}>
                                    <span>Slide {ind + 1}</span>
                                </div>
                            </div>
                        )
                    })}
                </Slide>
            </div> 
        )
    }
}