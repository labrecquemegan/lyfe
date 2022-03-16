import React, { useState, useRef, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './mindmodal.scss';
import MindfulnessInput from '../MindfulInput';
import {gsap, Power3} from 'gsap';

const MindModal = ({ user }) => {
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
		<div className="mind-modal-row" ref={(container) => {
			UserAnim = container;
		  }}>
			<button onClick={onOpenModal}>Log Your Mindful Activities</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				min={0}
				max={720}
				classNames={{
					overlay: 'customOverlay',
					modal: 'mindModal',
				}}
			>
				<MindfulnessInput user={user} />
			</Modal>
		</div>
	);
};

export default MindModal;
