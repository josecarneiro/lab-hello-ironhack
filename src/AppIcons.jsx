import React from 'react'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function AppIcons() {
  //...
  return (

    <div className="App-icons">

    <div className="App-icon-box">
      <img src={icon1} className="App-logo" alt="logo" />
      <h2>Declarative</h2>
      <p>
        React makes it <br />
        painless to create <br />
        interactive UIs.
      </p>
    </div>


    <div className="App-icon-box">
      <img src={icon2} className="App-logo" alt="logo" />
      <h2>Components</h2>
      <p>
        Build encapsulated<br />
        components that <br />
        manage their state.
      </p>
    </div>


    <div className="App-icon-box">
      <img src={icon3} className="App-logo" alt="logo" />
      <h2>Single-Way</h2>
      <p>
        A set of immutable <br />
        values are passed to <br />
        the component's.
      </p>
    </div>


    <div className="App-icon-box">
      <img src={icon4} className="App-logo" alt="logo" />
      <h2>JSX</h2>
      <p>
        Statically-typed<br />
        designed to run on<br />
        modern browsers.
      </p>
    </div>

    </div>

  )
}

export default AppIcons;