import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Bottom from './components/bottom';
import Bonus from './components/bonus';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('App-header'));
ReactDOM.render(<Bottom />, document.getElementById('App-footer'));

let start = 0;

window.addEventListener('click', event => {
  if (start === 0) {
    ReactDOM.render(<Bonus />, document.getElementById('root'));
    start = 1;
  } else {
    alert('lol');
    ReactDOM.render(<App />, document.getElementById('root'));
    ReactDOM.render(<Header />, document.getElementById('App-header'));
    ReactDOM.render(<Bottom />, document.getElementById('App-footer'));
    start = 0;
  }
});
