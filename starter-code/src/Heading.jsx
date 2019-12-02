import React, { Component } from 'react';

import './Heading.css'

class Heading extends Component {
    render(){
        return (
            <header className="title"> 
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn a Frontend framwork from scratch, to become a Ninja Developer</h3>
            </header>
        )
    }
}

export default Heading;