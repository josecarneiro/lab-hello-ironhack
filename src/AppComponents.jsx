import React from 'react';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

const AppComponent = () => {
  //...
  return (
    <div>
      <section>
        <figure>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <figcaption>React makes it painless to create interactive UIs.</figcaption>
        </figure>
        <figure>
          <img src={icon2} alt="con2" />
          <h3>Components</h3>
          <figcaption>Build encapsulated components that manage their state</figcaption>
        </figure>
        <figure>
          <img src={icon3} alt="con3" />
          <h3>Single-Way</h3>
          <figcaption>A set of immutable values are passed to the component's.</figcaption>
        </figure>
        <figure>
          <img src={icon4} alt="con4" />
          <h3>JSX</h3>
          <figcaption>Statically-typed, designed to run on modern browsers.</figcaption>
        </figure>
      </section>
    </div>
  );
};

export default AppComponent;
