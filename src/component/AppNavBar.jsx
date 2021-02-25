import React from 'react';
 // import logo from '../ironhack-log.svg';

 const AppNavBar = () => {
 	let logo = '/images/ironhack-logo.svg';
 	return (
 		<div className="logo-ironhack">
 			<nav>
 				<img src={logo} alt="image" />
 			</nav>
 		</div>
 	);
 };

 export default AppNavBar;