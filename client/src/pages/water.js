import React from 'react';
import Calendar from '../components/Calendar/index';
import WaterAnimation from '../components/waterAnimation/index';
import WaterInput from '../components/Water/waterinput'



const Water = () => {
	return (
		<>
			<div className="page">
				<div className="container">
					<div>
						<Calendar />
						<WaterInput />
					</div>
				</div>
			</div>
		</>
	);
};

export default Water;
