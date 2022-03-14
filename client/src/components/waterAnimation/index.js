import React from "react";
import "./waterAnimation.css";


const Water = () => {
	return (

		<div class = "gauge">
        <div class = "gauge__body">
            <div class = "gauge__fill"></div>
            <div class = "gauge__cover"></div>
        </div>
    </div>

	);
};

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
	if (value < 0 || value > 1){

	
	return;
}
// For the value just do current water divided by water calories 
// Set the value to the current water amount

	gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
	gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;

}

setGaugeValue(gaugeElement, 0.7);

export default Water;