import React, { Component } from 'react';
import logo from './logo.svg';
// import image from '../public/images/logo192.png';
import Header from './components/Header';
import DeclarativeCard from './components/Declarative-card';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-second-fold">
          <DeclarativeCard />
          <div>
            <h4>Components</h4>
            <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
          </div>
          <div>
            <h4>Single-way</h4>
            <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
          </div>
          <div>
            <h4>JSX</h4>
            <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
