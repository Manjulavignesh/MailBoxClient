import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function OpenInbox(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.setModal(true);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.email}</Modal.Title>
        </Modal.Header>
        <div style={{ marginLeft: 15, marginTop: 10 }}>
          <h4>{props.subject}</h4>
        </div>
        <Modal.Body>{props.Message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OpenInbox;
