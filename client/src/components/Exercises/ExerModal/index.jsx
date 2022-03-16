import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './exermodal.scss'
import ExerciseInput from '../ExerInput';


const ExerModal = ({ user }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="modal-row">
      <button onClick={onOpenModal}>Change User Info</button>
      <Modal 
      open={open} 
      onClose={onCloseModal} 
      center
      classNames={{
          overlay: 'customOverlay',
          modal: 'customModal'
      }}>
        <ExerciseInput user={user}/>
      </Modal>
    </div>
  );
};

export default ExerModal;
