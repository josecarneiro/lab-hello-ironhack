import React from "react";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

const Section = () => {
	return (
		<div>
			<div className="container-fluid px-5 pt-5 pb-5">
				<div className="row mx-5">
					<div className="col">
						<img src={icon1} width="120"	height="120" alt="" />
            <h2 className="ml-3 font-weight-bold">Declarative</h2>
            <p className="ml-3">React makes it painless to create interactive UIs.</p>
					</div>
          <div className="col">
						<img src={icon2} width="120"	height="120" alt="" />
            <h2 className="ml-3 font-weight-bold">Components</h2>
            <p className="ml-3">Build encapsulated components that manage their state.</p>
					</div>
          <div className="col">
						<img src={icon3} width="120"	height="120" alt="" />
            <h2 className="ml-3 font-weight-bold">Single-Way</h2>
            <p className="ml-3">A set of immutable are passed to the components.</p>
					</div>
          <div className="col">
						<img src={icon4} width="120"	height="120" alt="" />
            <h2 className="ml-3 font-weight-bold">JSX</h2>
            <p className="ml-3">Statically-typed, designed to run on modern browsers.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
