import React, { Component } from 'react';
import logo from './logo.svg';

import './App.scss';
import AppMessage from './component/AppMessage';
import AppNavBar from './component/AppNavBar';
import AppBody from './component/AppBody';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-navbar">
						<AppNavBar />
					</div>
					<img src={logo} className="App-logo" alt="logo" />
					<AppMessage />
				</header>
				<AppBody />
			</div>
		);
	}
}

export default App;
