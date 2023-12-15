import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const ComposeEmail = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal=()=>setShowModal(false)
  

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="modal-btn1"
      >
        Compose Email
      </button>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ComposeEmail;
