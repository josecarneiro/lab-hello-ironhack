import React from 'react';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import './section.css';
const Section = () => {
  return (
    <section>
      <figure>
        <img src={icon1} alt="icon1" />
      </figure>
      <figure>
        <img src={icon2} alt="icon2" />
      </figure>
      <figure>
        <img src={icon3} alt="icon3" />
      </figure>
      <figure>
        <img src={icon4} alt="icon4" />
      </figure>
    </section>
  );
};

export default Section;
