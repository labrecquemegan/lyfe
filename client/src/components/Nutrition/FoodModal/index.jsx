import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FoodInput from '../FoodInput';
import './foodmodal.scss';

const FoodModal = ({ user }) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<div className="nutrition-modal-row">
			<button onClick={onOpenModal}>Log Your Meals</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}}
			>
				<FoodInput user={user} />
			</Modal>
		</div>
	);
};

export default FoodModal;
