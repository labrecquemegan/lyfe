import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import UserInfo from '../UserInfo';
import './modal.scss';

const ModalTest = ({ user }) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<div className="dashboard-modal-row">
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
