import React, { useState } from 'react';
import './waterAnimation.css';
import "./moving.js";


const Water = () => {
	
		const [data, setData] = useState(null);
		const [print, setPrint] = useState(false);

		function getData(val) {
			setData(val.target.value)
			console.warn(val.target.value)
		}
		return (
			<div className = "gauge">
				<div className = "gauge__body"> 
					<div className="gauge__fill"></div>

					<div className="gauge__cover"></div>
				</div>
						
				{
					print?
					<h1>{data}</h1>
					:null
				}
				<input type = "text" onChange = {getData} />
				<button onClick = {() => setPrint(true)} >Print Value</button>
				
			</div>
		)

		// <div>
		// 	<div className="gauge">
		// 		<div className="gauge__body">
		// 			<div className="gauge__fill"></div>

		// 			<div className="gauge__cover"></div>
		// 		</div>
		// 	</div>
		// 	<input type="text" className="water-amount" />
		// 	<button>Submit</button>
		// </div>
		//Remember return()

	
};

export default Water;
