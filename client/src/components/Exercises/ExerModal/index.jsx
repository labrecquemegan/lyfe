import React, { useState, useEffect, useRef } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './exermodal.scss';
import ExerciseInput from '../ExerInput';
import {gsap, Power3} from 'gsap';

const ExerModal = ({ user }) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	let UserAnim = useRef(null);
	console.log(UserAnim);
  
	useEffect(() => {
	  console.log(UserAnim);
	  gsap.to(UserAnim, 3.5, {
		opacity: 1,
		y: 40,
		ease: Power3.easeOut,
	  });
	}, []);

	return (
		<div className="exercise-modal-row" ref={(container) => {
			UserAnim = container;
		  }}>
			<button onClick={onOpenModal}>Log Exercise</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'exerciseModal',
				}}
			>
				<ExerciseInput user={user} />
			</Modal>
		</div>
	);
};

export default ExerModal;
