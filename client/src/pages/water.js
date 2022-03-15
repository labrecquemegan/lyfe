import React from 'react';
import Calendar from '../components/Calendar/index';
import WaterInput from '../components/Water/waterinput';
import Wateranimation from '../components/waterAnimation/index';

let style = {
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'row',
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
};

const Water = () => {
	return (
		<>
			<div className="page">
				<div className="container" style={style}>
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
