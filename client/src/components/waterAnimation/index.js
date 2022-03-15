import React, { useState } from 'react';
import './waterAnimation.css';
import { setGaugeValue } from "./moving.js";


const Water = () => {

		const [data, setData] = useState(null);
		const [print, setPrint] = useState(false);
		const [spin, setSpin] = useState(0);

		function getData(val) {
			setData(val.target.value)
			setPrint(false);
			console.log(val.target.value);
			setGaugeValue(val.target.value);
		}
		

		return (
			<div className = "gauge">
				<div className = "gauge__body"> 
					<div className="gauge__fill" ></div>

					<div className="gauge__cover">

					{/* {
						// If print is true 
					print?
					
					<h1>{data}</h1>
					:null
					} */}
				
					</div>
				</div>
						
				{/* So when button is clicked put
					the value of the number as the rotation */}


				<input type = "number" max={50} onChange = {getData} />
				<button onClick = {() => setPrint(true)} >Print Value</button>
				
				
			</div>
		)
};

export default Water;
