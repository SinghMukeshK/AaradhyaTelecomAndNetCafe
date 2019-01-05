import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Reveal extends Component {
    render() {
        return (
            <Slide top delay={1000}>
                <div style={{backgroundColor:"red", maxHeight:"500px", width:`500px`}}>
                    Revealing
                </div>
            </Slide>
        )
    }
}

export default Reveal