import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

let file = process.env.PUBLIC_URL+`./images.txt`

// for (let i=0; i<tot; i++) {
//     img.push(process.env.PUBLIC_URL+`./images/image${i+1}.jpg`)
    
// }

// const img = []
// img.push('https://drive.google.com/uc?id=1Rd4XyZ-HSeCUamOK4nvVDQ2MVloc7A9O')
// img.push('https://drive.google.com/uc?id=12ouq35gbwucOPzy0oisy8Ts0rpgd_IWn')
// img.push('https://drive.google.com/uc?id=1z5r-glfmMQqNflm9DTq9PEoNPdEFfow5')
// img.push('https://drive.google.com/uc?id=1bVcXaTrajtdM6x_RLv1_kNEexNLNoNBC')
// img.push('https://drive.google.com/uc?id=1oZvszqlojedGpw4_Fyeweumk6DilGlPJ')
// img.push('https://drive.google.com/uc?id=1NSnWk0qFxZt5HS-nX1_m0QLLjYkCXJPd')
// img.push('https://drive.google.com/uc?id=11DxNh1Yji_YZ73vgORt7syZQ2siY9rSG')
// img.push('https://drive.google.com/uc?id=1x7WAg2Ic0KalZSo158Y6O-uMbEwyVU9U')
// img.push('https://drive.google.com/uc?id=1yFDK8Kio5m2KoqgPjkwXOFnNuGVXdhEj')
// img.push('https://drive.google.com/uc?id=19mR6Oeh4oiEIQXBUbL_6cxn-V7UTDnEa')


const properties = {
    duration: 5000,
    transitionDuration: 500,
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