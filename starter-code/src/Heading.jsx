import React, { Component } from 'react';

class Heading extends Component {
    render () {
        return (
        <header className="App-header">
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn a Frontend framework from startch, to become an Ninka Developer</p>

        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
           >
            Awesome!
           </a>
      </header>
      )
    }
}

export default Heading;