import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import WaterInput from '../WaterInput/waterinput';
import './waterModal.scss';

const WaterModal = ({ user }) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<div className="water-modal-row">
			<button onClick={onOpenModal}>Log Your Water Intake</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'waterModal',
				}}
			>
				<WaterInput user={user} />
			</Modal>
		</div>
	);
};

export default WaterModal;
