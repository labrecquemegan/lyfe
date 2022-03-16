import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './waterModal.scss'
import WaterInput from "../waterinput";

const MindModal = ({ user }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="modal-row">
      <button onClick={onOpenModal}>Log Your Water Intake</button>
      <Modal 
      open={open} 
      onClose={onCloseModal} 
      center
      classNames={{
          overlay: 'customOverlay',
          modal: 'customModal'
      }}>
        <WaterInput user={user}/>
      </Modal>
    </div>
  );
};

export default MindModal;
