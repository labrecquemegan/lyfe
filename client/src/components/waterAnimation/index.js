import React from 'react';
import './waterAnimation.css';

const Water = () => {
	return (
		<div className="gauge">
			<div className="gauge__body">
				<div className="gauge__fill"></div>
				<div className="gauge__cover"></div>
			</div>
		</div>
	);
};

export default Water;
