import React from 'react';

 const AppBody = () => {
 	let img1 = './images/icon1.png';
 	let img2 = './images/icon2.png';
 	let img3 = './images/icon3.png';
 	let img4 = './images/icon4.png';
 	return (
 		<div className="app-body">
 			<div>
 				<img src={img1} alt="" />
 				<h1>Declarative</h1>
 				<p>
 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error voluptatum
 					laboriosam quidem eos.
 				</p>
 			</div>
 			<div>
 				<img src={img2} alt="" />
 				<h1>Componente</h1>
 				<p>
 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis cupiditate.
 				</p>
 			</div>
 			<div>
 				<img src={img3} alt="" />
 				<h1>JSX</h1>
 				<p>
 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores, sit quae minus
 					cum saepe.
 				</p>
 			</div>
 			<div>
 				<img src={img4} alt="" />
 				<h1>Single-Way</h1>
 				<p>
 					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa ut.
 				</p>
 			</div>
 		</div>
 	);
 };

 export default AppBody;