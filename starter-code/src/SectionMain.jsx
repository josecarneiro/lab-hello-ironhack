import React, { Component } from 'react';
 import './SectionMain.scss';

class SectionMain extends Component{
    render () {
        return (
           <div className='section-main'>
                <article className='declarative-box'>
                <img src="./images/icon1.png" alt="articleImage" className='box-image'/>
                <p className='box-title'>Declarative</p>
                <p className='box-text'>React makes it painless to create interactive UIs</p>
                </article>

                <article className='declarative-box'>
                <img src="./images/icon1.png" alt="articleImage" className='box-image'/>
                <p className='box-title'>Components</p>
                <p className='box-text'>Build encapsuled components that manage their state</p>
                </article>

                <article className='declarative-box'>
                <img src="./images/icon1.png" alt="articleImage" className='box-image'/>
                <p className='box-title'>Single-way</p>
                <p className='box-text'>A set of immutable values are passed to the component's</p>
                </article>

                <article className='declarative-box'>
                <img src="./images/icon1.png" alt="articleImage" className='box-image'/>
                <p className='box-title'>JSX</p>
                <p className='box-text'>Statically-typed, designed to tun on modern browser</p>
                </article>
           </div>
        );
    }
}

export default SectionMain;