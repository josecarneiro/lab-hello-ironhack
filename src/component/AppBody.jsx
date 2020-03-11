import React from 'react';
// import logo from '../ironhack-log.svg';

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
					laboriosam quidem eos, impedit consequuntur rem maxime nihil ad pariatur praesentium quas
					nulla rerum, ex ducimus eveniet illum excepturi!
				</p>
			</div>
			<div>
				<img src={img2} alt="" />
				<h1>Componente</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis cupiditate
					pariatur quam ut. Voluptatem et, aspernatur excepturi non illum neque nemo. Aliquam animi
					minima facilis corrupti voluptate exercitationem tenetur.
				</p>
			</div>
			<div>
				<img src={img3} alt="" />
				<h1>JSX</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores, sit quae minus
					cum saepe repellat voluptatem iusto ex vero voluptatum maxime earum architecto nesciunt
					deserunt eum in reiciendis! Ad.
				</p>
			</div>
			<div>
				<img src={img4} alt="" />
				<h1>Single-Way</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa ut, non
					pariatur laboriosam eaque reiciendis impedit. Adipisci tempora, doloribus saepe
					voluptatibus est beatae, soluta, iusto possimus accusantium dolor animi!
				</p>
			</div>
		</div>
	);
};

export default AppBody;
