import React from 'react';

function AppHeader() {
 //...
 return (
  <header className="App-header">
          
  <div className="App-header-content">
  
  <h1>
    Say hello to <br />
    ReactJS
  <p>
    You will learn a Frontend <br />
    framework from scratch, to <br />
      become an Ninka Developer
  </p>
  
  </h1>
  
  <button><a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Awesome!
  </a>
  </button>

  </div>
</header>
 )
}

export default AppHeader;