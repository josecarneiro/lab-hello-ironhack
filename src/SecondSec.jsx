import React, { Component } from 'react';

import './App.css';

function SecondSec() {
  return (
    <section className="App-types">
      <div>
        <img class="img-second" src="./images/icon1.png" alt="Declarative" />
        <h4>Declarative</h4>
        <p class="p-seconds">React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img class="img-second" src="./images/icon2.png" alt="Components" />
        <h4>Components</h4>
        <p class="p-seconds">Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img class="img-second" src="./images/icon3.png" alt="Single-Way" />
        <h4>Single-Way</h4>
        <p class="p-seconds">A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img class="img-second" src="./images/icon4.png" alt="JSX" />
        <h4>JSX</h4>
        <p class="p-seconds">Statically-typed, designed to run on modern browsers.</p>
      </div>
    </section>
  );
}

export default SecondSec;
