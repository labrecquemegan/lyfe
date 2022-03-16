import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './mindmodal.scss';
import MindfulnessInput from '../MindfulInput';

const MindModal = ({ user }) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<div className="mind-modal-row">
			<button onClick={onOpenModal}>Log Your Mindful Activities</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}}
			>
				<MindfulnessInput user={user} />
			</Modal>
		</div>
	);
};

export default MindModal;
