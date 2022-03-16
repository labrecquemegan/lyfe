import React, { useState, useRef, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import UserInfo from '../UserInfo';
import './modal.scss';
import {gsap, Power3} from 'gsap';

const ModalTest = ({ user }) => {
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
		<div className="dashboard-modal-row" ref={(container) => {
			UserAnim = container;
		  }}>
			<button onClick={onOpenModal}>Change User Info</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'userModal',
				}}
			>
				<UserInfo user={user} />
			</Modal>
		</div>
	);
};

export default ModalTest;
