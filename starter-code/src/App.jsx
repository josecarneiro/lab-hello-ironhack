import React from "react";
import logo from "./images/ironhack-logo.svg";
import "./App.scss";

import DocumentationLink from "./component/DocumentationLink";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="text">
            <h1>
              {" "}
              Say hello to <br></br> ReactJS
            </h1>
            <h4>
              {" "}
              You will learn a Frontend<br></br> framework from scratch, to
              <br></br> become an Ninka Developer.
            </h4>
          </div>
          <DocumentationLink />
        </header>
      </div>
    );
  }
}

export default App;
